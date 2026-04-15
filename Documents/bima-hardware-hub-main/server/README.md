# Backend Server - Boma Mabati Factory

A complete Node.js + Express + TypeScript backend server for Boma Mabati Factory website.

## Quick Start

```bash
npm install
npm run dev
```

## Environment Setup

Copy `.env.example` to `.env.local` and fill in your values:

```env
PORT=3001
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/boma_mabati
JWT_SECRET=your_super_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_password
FRONTEND_URL=http://localhost:5173
PESAPAL_API_KEY=your_pesapal_key
PESAPAL_SECRET_KEY=your_pesapal_secret
```

## API Endpoints

### Quotes
- `POST /api/quotes` - Submit a quote request
- `GET /api/quotes/:id` - Get quote details
- `DELETE /api/quotes/:id` - Cancel quote

### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get messages (admin)

### Products
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/status` - Update order status

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/refresh` - Refresh token

## Database Schema

See `/server/prisma/schema.prisma` for full database schema.

## Testing

```bash
npm run test
```

## Deployment

```bash
npm run build
npm run start
```

Deploy to Heroku, Railway, Render, or any Node.js hosting.
