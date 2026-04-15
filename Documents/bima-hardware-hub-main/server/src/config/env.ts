import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export const env = {
  PORT: parseInt(process.env.PORT || '3001', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://localhost/boma_mabati',
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  
  // Email Configuration
  EMAIL_HOST: process.env.EMAIL_HOST || 'smtp.gmail.com',
  EMAIL_PORT: parseInt(process.env.EMAIL_PORT || '587', 10),
  EMAIL_USER: process.env.EMAIL_USER || '',
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || '',
  EMAIL_FROM: process.env.EMAIL_FROM || 'noreply@bomamabati.co.ke',
  
  // Payment
  PESAPAL_API_KEY: process.env.PESAPAL_API_KEY || '',
  PESAPAL_SECRET_KEY: process.env.PESAPAL_SECRET_KEY || '',
  
  // Feature flags
  ENABLE_EMAIL: process.env.ENABLE_EMAIL === 'true',
  ENABLE_PAYMENTS: process.env.ENABLE_PAYMENTS === 'true',
} as const;

// Validate required environment variables
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET', 'EMAIL_USER'];
const missing = requiredEnvVars.filter(v => !process.env[v]);

if (missing.length > 0 && env.NODE_ENV === 'production') {
  console.error(`Missing required environment variables: ${missing.join(', ')}`);
  process.exit(1);
}
