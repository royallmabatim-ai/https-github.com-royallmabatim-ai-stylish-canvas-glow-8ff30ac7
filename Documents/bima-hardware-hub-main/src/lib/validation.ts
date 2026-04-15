import { z } from 'zod';

// Quote/Contact request validation
export const quoteFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .regex(/^(\+?254|0)[0-9]{9}$/, 'Please enter a valid Kenyan phone number'),
  location: z.string()
    .min(2, 'Location must be at least 2 characters')
    .max(100, 'Location must be less than 100 characters'),
  productInterest: z.string()
    .min(1, 'Please select a product'),
  requirements: z.string()
    .max(500, 'Requirements must be less than 500 characters')
    .optional()
    .or(z.literal('')),
  wantCallback: z.boolean().default(false),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name is required')
    .max(100, 'Name is too long'),
  email: z.string()
    .email('Invalid email address'),
  phone: z.string()
    .regex(/^(\+?254|0)[0-9]{9}$/, 'Invalid phone number'),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Product search/filter validation
export const productFilterSchema = z.object({
  search: z.string().optional().or(z.literal('')),
  profile: z.string().optional().or(z.literal('')),
  gauge: z.string().optional().or(z.literal('')),
  color: z.string().optional().or(z.literal('')),
  minPrice: z.number().nonnegative().optional(),
  maxPrice: z.number().nonnegative().optional(),
  sortBy: z.enum(['name', 'price', 'newest', 'rating']).default('name'),
  page: z.number().positive().default(1),
  limit: z.number().positive().max(100).default(12),
});

export type ProductFilter = z.infer<typeof productFilterSchema>;

// Order validation
export const orderSchema = z.object({
  items: z.array(z.object({
    productId: z.string().min(1),
    quantity: z.number().positive(),
    price: z.number().nonnegative(),
  })).min(1, 'Order must have at least one item'),
  customerId: z.string().min(1),
  deliveryLocation: z.string().min(5),
  notes: z.string().optional(),
});

export type OrderData = z.infer<typeof orderSchema>;
