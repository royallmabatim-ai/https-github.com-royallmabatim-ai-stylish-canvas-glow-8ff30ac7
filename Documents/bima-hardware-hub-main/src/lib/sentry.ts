import * as Sentry from '@sentry/react';
import { env } from '@/config/env';

export const initializeSentry = (): void => {
  if (!env.ENABLE_ERROR_TRACKING || !env.SENTRY_DSN) {
    return;
  }

  Sentry.init({
    dsn: env.SENTRY_DSN,
    environment: env.ENVIRONMENT,
    enabled: env.IS_PRODUCTION || env.ENABLE_ERROR_TRACKING,
    attachStacktrace: true,
    tracesSampleRate: env.IS_PRODUCTION ? 0.1 : 1.0,
    denyUrls: [
      // Browser extensions
      /extensions\//i,
      /^chrome:\/\//i,
      /^moz-extension:\/\//i,
    ],
  });
};

export const captureException = (error: Error, context?: Record<string, unknown>): void => {
  if (!env.ENABLE_ERROR_TRACKING) {
    console.error('Captured exception:', error, context);
    return;
  }
  Sentry.captureException(error, { contexts: { additional: context } });
};

export const captureMessage = (message: string, level: Sentry.SeverityLevel = 'info'): void => {
  if (!env.ENABLE_ERROR_TRACKING) {
    console.log(`[${level}] ${message}`);
    return;
  }
  Sentry.captureMessage(message, level);
};

export const setUserContext = (userId: string, email?: string, username?: string): void => {
  Sentry.setUser({ id: userId, email, username });
};

export const clearUserContext = (): void => {
  Sentry.setUser(null);
};
