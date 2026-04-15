// Environment configuration with runtime validation
export const env = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000', 10),
  GA_ID: import.meta.env.VITE_GA_ID || '',
  GTM_ID: import.meta.env.VITE_GTM_ID || '',
  SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN || '',
  ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT || 'development',
  RECAPTCHA_KEY: import.meta.env.VITE_RECAPTCHA_KEY || '',
  PESAPAL_API_KEY: import.meta.env.VITE_PESAPAL_API_KEY || '',
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  ENABLE_ERROR_TRACKING: import.meta.env.VITE_ENABLE_ERROR_TRACKING === 'true',
  IS_PRODUCTION: import.meta.env.PROD,
  IS_DEVELOPMENT: import.meta.env.DEV,
} as const;

export const validateEnv = (): void => {
  if (!env.API_URL) {
    console.warn('VITE_API_URL is not set. API calls will fail.');
  }
};
