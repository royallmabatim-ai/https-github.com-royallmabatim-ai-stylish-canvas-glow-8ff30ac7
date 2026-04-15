import { useState, useCallback } from 'react';
import { z } from 'zod';
import { api, ApiError } from '@/lib/api';
import { useToast } from '@/components/ui/use-toast';

interface UseFormSubmitOptions<T> {
  schema: z.ZodSchema;
  onSubmit: (data: T) => Promise<unknown>;
  onSuccess?: (result: unknown) => void;
  onError?: (error: Error) => void;
}

export function useFormSubmit<T>({
  schema,
  onSubmit,
  onSuccess,
  onError,
}: UseFormSubmitOptions<T>) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = useCallback(
    async (formData: unknown) => {
      setIsLoading(true);
      setErrors({});

      try {
        // Validate data
        const validatedData = schema.parse(formData) as T;

        // Submit
        const result = await onSubmit(validatedData);

        // Success
        toast({
          title: 'Success',
          description: 'Your request has been submitted. We\'ll contact you soon.',
        });

        onSuccess?.(result);
        return result;
      } catch (error) {
        if (error instanceof z.ZodError) {
          // Validation errors
          const formErrors: Record<string, string> = {};
          error.errors.forEach((err) => {
            const path = err.path.join('.');
            formErrors[path] = err.message;
          });
          setErrors(formErrors);

          toast({
            title: 'Validation Error',
            description: 'Please check the form and try again.',
            variant: 'destructive',
          });
        } else if (error instanceof ApiError) {
          // API error
          toast({
            title: 'Error',
            description: error.message,
            variant: 'destructive',
          });
          onError?.(error);
        } else if (error instanceof Error) {
          toast({
            title: 'Error',
            description: error.message,
            variant: 'destructive',
          });
          onError?.(error);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [schema, onSubmit, onSuccess, onError, toast]
  );

  return { handleSubmit, isLoading, errors };
}
