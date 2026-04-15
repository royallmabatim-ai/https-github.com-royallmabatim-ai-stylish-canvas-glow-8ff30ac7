import express, { Express } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { env } from './config/env.js';
import { prisma } from './lib/prisma.js';
import { errorHandler } from './middleware/validate.js';
import quotesRouter from './routes/quotes.js';
import contactRouter from './routes/contact.js';

const app: Express = express();

// Middleware
app.use(cors({
  origin: [env.FRONTEND_URL, 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/quotes', quotesRouter);
app.use('/api/contact', contactRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
  });
});

// Error handler
app.use(errorHandler);

// Start server
const start = async (): Promise<void> => {
  try {
    // Test database connection
    await prisma.$executeRaw`SELECT 1`;
    console.log('✓ Database connected');

    app.listen(env.PORT, () => {
      console.log(`✓ Server running on http://localhost:${env.PORT}`);
      console.log(`✓ Environment: ${env.NODE_ENV}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();

export default app;
