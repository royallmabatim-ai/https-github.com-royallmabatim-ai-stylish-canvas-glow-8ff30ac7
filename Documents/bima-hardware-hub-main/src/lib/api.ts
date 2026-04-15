import { z } from 'zod';
import { config } from './config';

/**
 * Validation Schemas
 */
export const QuoteFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+254|0)[0-9]{9}$/, 'Invalid Kenya phone number'),
  productInterest: z.string().min(1, 'Please select a product'),
  location: z.string().min(2, 'Location is required').max(100),
  additionalRequirements: z.string().max(1000).optional(),
  quantity: z.number().min(1, 'Quantity must be at least 1').optional(),
  preferCallback: z.boolean().default(false),
});

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+254|0)[0-9]{9}$/, 'Invalid Kenya phone number'),
  subject: z.string().min(5, 'Subject is required').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

export const OrderFormSchema = z.object({
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().min(1),
  })).min(1, 'At least one item required'),
  deliveryLocation: z.string().min(2, 'Delivery location required'),
  customerName: z.string().min(2),
  customerEmail: z.string().email(),
  customerPhone: z.string().regex(/^(\+254|0)[0-9]{9}$/),
  paymentMethod: z.enum(['mpesa', 'card', 'bank_transfer']),
});

export type QuoteFormData = z.infer<typeof QuoteFormSchema>;
export type ContactFormData = z.infer<typeof ContactFormSchema>;
export type OrderFormData = z.infer<typeof OrderFormSchema>;

/**
 * API Service
 * Handles all API requests with proper error handling
 */
class ApiService {
  private baseUrl: string;
  private timeout: number;
  private retries: number;

  constructor() {
    this.baseUrl = config.api.baseUrl;
    this.timeout = config.api.timeout;
    this.retries = config.api.retries;
  }

  /**
   * Fetch helper with retry logic
   */
  private async fetchWithRetry(
    url: string,
    options: RequestInit = {},
    attempt = 0
  ): Promise<Response> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new ApiError(
          error.message || `HTTP ${response.status}`,
          response.status,
          error
        );
      }

      return response;
    } catch (error) {
      if (attempt < this.retries && !(error instanceof ApiError && error.status === 400)) {
        console.warn(`Retry attempt ${attempt + 1}/${this.retries}`, error);
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
        return this.fetchWithRetry(url, options, attempt + 1);
      }
      throw error;
    }
  }

  /**
   * Submit a quote request
   */
  async submitQuote(data: QuoteFormData): Promise<{ success: boolean; quoteId: string }> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/quotes`, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Submit a contact form
   */
  async submitContact(data: ContactFormData): Promise<{ success: boolean }> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/contact`, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Create an order
   */
  async createOrder(data: OrderFormData): Promise<{ orderId: string; paymentUrl?: string }> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/orders`, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Get order status
   */
  async getOrderStatus(orderId: string): Promise<{ status: string; details: unknown }> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/orders/${orderId}`);
      return await response.json();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Get products (for dynamic loading)
   */
  async getProducts(): Promise<unknown[]> {
    try {
      const response = await this.fetchWithRetry(`${this.baseUrl}/products`);
      return await response.json();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Error handling
   */
  private handleError(error: unknown): Error {
    if (error instanceof ApiError) {
      return error;
    }
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      return new ApiError('Network error. Please check your connection.', 0, error);
    }
    if (error instanceof Error && error.name === 'AbortError') {
      return new ApiError('Request timeout. Please try again.', 0, error);
    }
    return new ApiError('An unexpected error occurred. Please try again.', 0, error);
  }
}

/**
 * Custom API Error
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number = 0,
    public details: unknown = null
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const api = new ApiService();
