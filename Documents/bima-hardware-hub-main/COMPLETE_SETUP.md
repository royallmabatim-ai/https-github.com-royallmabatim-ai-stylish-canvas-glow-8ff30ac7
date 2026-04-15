# Boma Mabati Factory - Complete Setup Guide

## Getting Started

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

### Backend Setup

```bash
cd server

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your values

# Setup database
npm run db:migrate

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

## Project Structure

```
├── src/                          # Frontend source
│   ├── components/               # React components
│   ├── pages/                    # Page components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utilities & services
│   ├── config/                   # Configuration files
│   ├── i18n/                     # Internationalization
│   └── App.tsx                   # Main app component
├── server/                       # Backend source
│   ├── src/
│   │   ├── routes/               # API routes
│   │   ├── services/             # Business logic
│   │   ├── middleware/           # Express middleware
│   │   ├── config/               # Configuration
│   │   └── index.ts              # Server entry
│   └── prisma/
│       └── schema.prisma         # Database schema
├── public/                       # Static assets
└── package.json
```

## Key Features Implemented

✅ **TypeScript Strict Mode** - Full type safety
✅ **Form Validation** - Zod schemas for client & server
✅ **Error Tracking** - Sentry integration ready
✅ **Analytics** - Google Analytics & GTM setup
✅ **SEO** - Sitemap, robots.txt, structured data
✅ **Accessibility** - ARIA labels, keyboard navigation
✅ **Email Service** - Quote & contact confirmations
✅ **API Client** - Type-safe fetch wrapper
✅ **Backend API** - Full Express server
✅ **Database** - Prisma ORM with PostgreSQL
✅ **Internationalization** - English & Swahili

## Environment Variables

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:3001
VITE_GA_ID=G-XXXXXXXXXX
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
VITE_ENABLE_ANALYTICS=true
```

### Backend (server/.env.local)
```
DATABASE_URL=postgresql://user:pass@localhost:5432/boma
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

## Deployment

### Frontend (Netlify)
- Connected to GitHub
- Auto-deploys on push to main
- Build command: `npm run build`
- Publish directory: `dist`

### Backend (Render/Railway)
- Create PostgreSQL database
- Set environment variables
- Deploy with `npm run build && npm start`

## Performance Tips

1. **Images**: Use WebP format with fallbacks
2. **Code Splitting**: Lazy load pages with React.lazy()
3. **Caching**: Set proper cache headers
4. **CDN**: Serve static assets from CDN
5. **Monitoring**: Use Sentry for error tracking

## Testing

```bash
# Frontend tests
npm run test

# Backend tests
cd server && npm run test
```

## API Endpoints

- `POST /api/quotes` - Submit quote request
- `POST /api/contact` - Send contact message
- `GET /api/products` - List products
- `GET /health` - Health check

## Support

For issues or questions, contact: support@bomamabati.co.ke

## License

MIT
