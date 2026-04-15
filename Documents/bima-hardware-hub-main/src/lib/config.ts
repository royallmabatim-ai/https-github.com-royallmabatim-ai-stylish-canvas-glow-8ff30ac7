/**
 * Application Configuration
 * Centralized configuration for the app
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
const APP_NAME = import.meta.env.VITE_APP_NAME || 'Boma Mabati Factory';
const APP_URL = import.meta.env.VITE_APP_URL || 'http://localhost:5173';

export const config = {
  api: {
    baseUrl: API_BASE_URL,
    timeout: 10000,
    retries: 3,
  },
  app: {
    name: APP_NAME,
    url: APP_URL,
    version: '1.0.0',
  },
  analytics: {
    gaId: import.meta.env.VITE_GA_ID || '',
    sentryDsn: import.meta.env.VITE_SENTRY_DSN || '',
  },
  payments: {
    pesapalApiKey: import.meta.env.VITE_PESAPAL_API_KEY || '',
    pesapalMerchantId: import.meta.env.VITE_PESAPAL_MERCHANT_ID || '',
    stripePublishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
    enabled: import.meta.env.VITE_ENABLE_PAYMENTS === 'true',
  },
  features: {
    enablePayments: import.meta.env.VITE_ENABLE_PAYMENTS === 'true',
    enableCart: import.meta.env.VITE_ENABLE_CART === 'true',
    enableUserAccounts: import.meta.env.VITE_ENABLE_USER_ACCOUNTS === 'true',
  },
};

// Product data
export const PRODUCTS = [
  {
    id: 'corrugated',
    name: 'Corrugated Mabati',
    description: 'Classic design, affordable, available in multiple lengths.',
    gauges: ['G-28 (0.28mm)', 'G-30 (0.30mm)'],
    lengths: ['2m', '3m', '4m'],
    colors: ['Silver', 'Red', 'Green', 'Blue'],
    warranty: '15-20 years',
    startingPrice: 650,
  },
  {
    id: 'box-profile',
    name: 'Box Profile Mabati',
    description: 'Modern look, strong and durable, ideal for residential and commercial projects.',
    gauges: ['G-28 (0.28mm)', 'G-30 (0.30mm)'],
    lengths: ['2m', '4m', '6m'],
    colors: ['Red', 'Green', 'Blue', 'Maroon', 'Charcoal'],
    warranty: '15-20 years',
    startingPrice: 750,
  },
  {
    id: 'colored-mabati',
    name: 'Colored Mabati',
    description: 'Stylish roofing with protective coating, available in multiple vibrant colors.',
    gauges: ['G-28 (0.28mm)', 'G-30 (0.30mm)'],
    lengths: ['2m', '3m', '4m'],
    colors: ['Red', 'Blue', 'Green', 'Grey', 'Maroon'],
    warranty: '20 years',
    startingPrice: 850,
  },
];

// Contact info
export const CONTACT_INFO = {
  phone: '+254734753416',
  phone2: '+254111051051',
  email: 'sales@bomamabati.co.ke',
  whatsapp: '254734753416',
  address: 'Mombasa Road, Nairobi, Kenya',
  coordinates: {
    lat: -1.3192,
    lng: 36.8502,
  },
  hours: {
    weekday: '08:00 - 17:00',
    saturday: '08:00 - 13:00',
    sunday: 'Closed',
  },
};
