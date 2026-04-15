import express from 'express';
import { Router } from 'express';
import { prisma } from '@/lib/prisma.js';
import { validateRequest } from '@/middleware/validate.js';
import { quoteFormSchema } from '@/validation/schemas.js';
import { sendQuoteConfirmationEmail } from '@/services/email.js';
import { createError } from '@/utils/errors.js';

const router: Router = express.Router();

// POST /api/quotes - Submit quote request
router.post('/', validateRequest(quoteFormSchema), async (req, res, next) => {
  try {
    const { name, email, phone, productInterest, location, requirements, wantCallback } = req.body;

    // Check for spam (optional - rate limiting)
    const recentQuote = await prisma.quote.findFirst({
      where: {
        email,
        createdAt: {
          gte: new Date(Date.now() - 3600000), // Last hour
        },
      },
    });

    if (recentQuote) {
      return res.status(429).json({
        success: false,
        error: 'Please wait before submitting another quote',
      });
    }

    // Create quote record
    const quote = await prisma.quote.create({
      data: {
        name,
        email,
        phone,
        productInterest,
        location,
        requirements: requirements || '',
        wantCallback,
        status: 'pending',
      },
    });

    // Send confirmation email
    await sendQuoteConfirmationEmail({
      name,
      email,
      quoteId: quote.id,
      productInterest,
      location,
    });

    // Send admin notification
    await sendQuoteNotificationToAdmin({
      name,
      email,
      phone,
      productInterest,
      location,
    });

    res.status(201).json({
      success: true,
      data: {
        quoteId: quote.id,
        message: 'Quote submitted successfully. Check your email for confirmation.',
      },
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/quotes/:id - Get quote details
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const quote = await prisma.quote.findUnique({
      where: { id },
    });

    if (!quote) {
      throw createError('Quote not found', 404);
    }

    res.json({
      success: true,
      data: quote,
    });
  } catch (error) {
    next(error);
  }
});

// PUT /api/quotes/:id - Update quote status (admin)
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const quote = await prisma.quote.update({
      where: { id },
      data: {
        status,
        notes: notes || undefined,
      },
    });

    res.json({
      success: true,
      data: quote,
    });
  } catch (error) {
    next(error);
  }
});

// DELETE /api/quotes/:id - Cancel quote (customer)
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.quote.delete({
      where: { id },
    });

    res.json({
      success: true,
      message: 'Quote cancelled successfully',
    });
  } catch (error) {
    next(error);
  }
});

async function sendQuoteNotificationToAdmin(quote: any): Promise<void> {
  // Send email to admin - implement based on your email service
  console.log('Admin notification:', quote);
}

export default router;
