import express from 'express';
import { Router } from 'express';
import { prisma } from '@/lib/prisma.js';
import { validateRequest } from '@/middleware/validate.js';
import { contactFormSchema } from '@/validation/schemas.js';
import { sendContactConfirmationEmail } from '@/services/email.js';

const router: Router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', validateRequest(contactFormSchema), async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Check for spam
    const recentMessage = await prisma.contactMessage.findFirst({
      where: {
        email,
        createdAt: {
          gte: new Date(Date.now() - 3600000),
        },
      },
    });

    if (recentMessage) {
      return res.status(429).json({
        success: false,
        error: 'Please wait before sending another message',
      });
    }

    // Create contact message
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
        status: 'unread',
      },
    });

    // Send confirmation email
    await sendContactConfirmationEmail({
      name,
      email,
      messageId: contactMessage.id,
    });

    res.status(201).json({
      success: true,
      data: {
        messageId: contactMessage.id,
        message: 'Message sent successfully. We will get back to you soon.',
      },
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/contact - Get all messages (admin only)
router.get('/', async (req, res, next) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    res.json({
      success: true,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
});

// PUT /api/contact/:id - Mark as read (admin)
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const message = await prisma.contactMessage.update({
      where: { id },
      data: { status: 'read' },
    });

    res.json({
      success: true,
      data: message,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
