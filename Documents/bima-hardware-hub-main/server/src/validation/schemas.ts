import { z } from 'zod';

export const quoteFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^(\+?254|0)[0-9]{9}$/),
  productInterest: z.string().min(1),
  location: z.string().min(2).max(100),
  requirements: z.string().max(500).optional(),
  wantCallback: z.boolean().default(false),
});

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^(\+?254|0)[0-9]{9}$/),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
