import { useCallback, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { QuoteFormData, quoteFormSchema } from '@/lib/validation';
import { captureException } from '@/lib/sentry';
import { trackQuoteSubmission } from '@/lib/analytics';

interface UseQuoteSubmitResult {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  submit: (data: QuoteFormData) => Promise<void>;
  reset: () => void;
}

export const useQuoteSubmit = (): UseQuoteSubmitResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const submit = useCallback(async (data: QuoteFormData): Promise<void> => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      // Validate data with zod
      const validatedData = quoteFormSchema.parse(data);

      // Submit to API
      const response = await apiClient.post<{ quoteId: string }>(
        '/api/quotes',
        validatedData
      );

      if (!response.success) {
        setError(response.error || 'Failed to submit quote. Please try again.');
        captureException(new Error(response.error || 'Quote submission failed'));
        return;
      }

      // Track analytics
      trackQuoteSubmission(validatedData.productInterest, validatedData.location);

      // Invalidate quotes query
      await queryClient.invalidateQueries({ queryKey: ['quotes'] });

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
