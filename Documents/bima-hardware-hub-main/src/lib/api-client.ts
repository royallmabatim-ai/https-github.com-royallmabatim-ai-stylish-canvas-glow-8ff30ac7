import { env } from '@/config/env';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}

const handleError = (error: unknown): ApiError => {
  if (error instanceof TypeError) {
    return {
      message: 'Network error. Please check your connection.',
      code: 'NETWORK_ERROR',
      status: 0,
    };
  }

  if (error instanceof Response) {
    return {
      message: `Server error: ${error.statusText}`,
      code: `HTTP_${error.status}`,
      status: error.status,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'UNKNOWN_ERROR',
      status: 500,
    };
  }

  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
    status: 500,
  };
};

export const apiClient = {
  async get<T>(path: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${env.API_URL}${path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        timeout: env.API_TIMEOUT,
        ...options,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      const apiError = handleError(error);
      return { success: false, error: apiError.message, code: apiError.code };
    }
  },

  async post<T>(path: string, body: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${env.API_URL}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        body: JSON.stringify(body),
        timeout: env.API_TIMEOUT,
        ...options,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      const apiError = handleError(error);
      return { success: false, error: apiError.message, code: apiError.code };
    }
  },

  async put<T>(path: string, body: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${env.API_URL}${path}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        body: JSON.stringify(body),
        timeout: env.API_TIMEOUT,
        ...options,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      const apiError = handleError(error);
      return { success: false, error: apiError.message, code: apiError.code };
    }
  },

  async delete<T>(path: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${env.API_URL}${path}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        timeout: env.API_TIMEOUT,
        ...options,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      const apiError = handleError(error);
      return { success: false, error: apiError.message, code: apiError.code };
    }
  },
};
