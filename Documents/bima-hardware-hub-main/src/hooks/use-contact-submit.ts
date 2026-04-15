import { useCallback, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { ContactFormData, contactFormSchema } from '@/lib/validation';
import { captureException } from '@/lib/sentry';
import { trackEvent } from '@/lib/analytics';

interface UseContactSubmitResult {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  submit: (data: ContactFormData) => Promise<void>;
  reset: () => void;
}

export const useContactSubmit = (): UseContactSubmitResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const submit = useCallback(async (data: ContactFormData): Promise<void> => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      // Validate data with zod
      const validatedData = contactFormSchema.parse(data);

      // Submit to API
      const response = await apiClient.post<{ messageId: string }>(
        '/api/contact',
        validatedData
      );

      if (!response.success) {
        setError(response.error || 'Failed to send message. Please try again.');
        captureException(new Error(response.error || 'Contact submission failed'));
        return;
      }

      // Track analytics
      trackEvent('contact', 'submit', validatedData.subject);

      // Invalidate messages query
      await queryClient.invalidateQueries({ queryKey: ['messages'] });

      setIsSuccess(true);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Validation failed';
      setError(message);
      captureException(err instanceof Error ? err : new Error(message));
    } finally {
      setIsLoading(false);
    }
  }, [queryClient]);

  const reset = useCallback(() => {
    setIsLoading(false);
    setIsSuccess(false);
    setError(null);
  }, []);

  return { isLoading, isSuccess, error, submit, reset };
};
