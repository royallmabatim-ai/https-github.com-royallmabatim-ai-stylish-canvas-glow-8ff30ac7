# Boma Mabati Factory - Development Guide

## Architecture Overview

This is a modern full-stack application built with:

- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS
- **Backend**: Node.js + Express + Prisma + PostgreSQL
- **Validation**: Zod for type-safe validation
- **Analytics**: Google Analytics & Sentry
- **i18n**: i18next for English/Swahili support

## File Structure Explained

### Frontend

```
src/
├── App.tsx                    # Main app with routing & services init
├── components/
│   ├── HeroSection.tsx        # Hero with quote form
│   ├── ProductsSection.tsx    # Product showcase
│   ├── Footer.tsx             # Contact info & links
│   └── ui/                    # shadcn/ui components
├── pages/
│   ├── Index.tsx              # Home page
│   ├── About.tsx              # About page
│   └── Blog.tsx               # Blog page
├── hooks/
│   ├── use-quote-submit.ts    # Quote submission hook
│   ├── use-contact-submit.ts  # Contact submission hook
│   ├── use-seo.ts             # SEO meta tags hook
│   └── use-accessibility.ts   # Accessibility enhancements
├── lib/
│   ├── api-client.ts          # Fetch wrapper with error handling
│   ├── validation.ts          # Zod schemas
│   ├── analytics.ts           # GA & GTM tracking
│   └── sentry.ts              # Error tracking
├── config/
│   └── env.ts                 # Environment variables
└── i18n/
    ├── config.ts              # i18n setup
    └── locales/               # Translation files
```

### Backend

```
server/
├── src/
│   ├── index.ts               # Server entry point
│   ├── config/
│   │   └── env.ts             # Environment validation
│   ├── routes/
│   │   ├── quotes.ts          # Quote endpoints
│   │   └── contact.ts         # Contact endpoints
│   ├── services/
│   │   └── email.ts           # Email sending
│   ├── middleware/
│   │   └── validate.ts        # Request validation & errors
│   ├── lib/
│   │   └── prisma.ts          # Prisma client
│   ├── utils/
│   │   └── errors.ts          # Error utilities
│   └── validation/
│       └── schemas.ts         # Zod schemas
└── prisma/
    └── schema.prisma          # Database schema
```

## Key Implementation Details

### Form Handling
- Uses `react-hook-form` for efficient form state
- `zodResolver` for type-safe validation
- Real-time error display
- Submits to backend API

### Validation Flow
1. Client validates with Zod
2. Server validates again with Zod
3. Data saved to PostgreSQL
4. Confirmation email sent
5. Success response returned

### Error Handling
- Zod validates input
- Try-catch blocks in async operations
- Sentry captures exceptions
- User-friendly error messages
- Automatic email on critical errors

### Analytics
- Track quote submissions
- Track page views
- Track product interactions
- Track conversion funnels
- Custom events for business metrics

## Common Tasks

### Adding a New API Endpoint

1. Add Zod schema in `server/src/validation/schemas.ts`
2. Create route handler in `server/src/routes/`
3. Add database model in `server/prisma/schema.prisma`
4. Run `npm run db:migrate`
5. Call from frontend using `apiClient`

### Adding a New Page

1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add SEO meta using `useSeo()` hook
4. Link from navigation

### Adding Translations

1. Add strings to `src/i18n/locales/en.json`
2. Add translations to `src/i18n/locales/sw.json`
3. Use `useTranslation()` hook in components

### Adding Analytics Tracking

```typescript
import { trackEvent } from '@/lib/analytics';

// Track custom event
trackEvent('category', 'action', 'label', value);

// Pre-built tracking
trackQuoteSubmission(productType, location);
trackProductView(productName, price);
```

## Debugging

### Frontend
- Open Dev Tools (F12)
- Check Console for errors
- Use React DevTools extension
- Use Network tab to see API calls

### Backend
- Check server logs in terminal
- Use Sentry dashboard for production errors
- Check database with Prisma Studio: `npx prisma studio`

## Performance Optimization Checklist

- [ ] Enable gzip compression
- [ ] Optimize images (WebP format)
- [ ] Load fonts from Google Fonts CDN
- [ ] Minify and bundle code
- [ ] Use service worker for offline support
- [ ] Implement code splitting with React.lazy()
- [ ] Cache API responses with React Query
- [ ] Compress CSS with PostCSS
- [ ] Monitor Core Web Vitals

## Security Best Practices

- [ ] Validate all inputs (both client & server)
- [ ] Use HTTPS in production
- [ ] Sanitize HTML output
- [ ] Implement rate limiting
- [ ] Use environment variables for secrets
- [ ] Keep dependencies updated
- [ ] Use security headers (CORS, CSP)
- [ ] Implement JWT for admin auth
- [ ] Hash passwords with bcrypt
- [ ] Enable database encryption

## Maintenance

Regular tasks:
- Update dependencies: `npm update`
- Run security audit: `npm audit`
- Check Sentry for error patterns
- Review Google Analytics
- Clean up old database records
- Test form submissions monthly
- Monitor server performance

## Next Steps

1. Set up database (PostgreSQL)
2. Configure email service (Gmail/SendGrid)
3. Get Sentry DSN from sentry.io
4. Get Google Analytics ID
5. Set up admin authentication
6. Implement payment processing
7. Create admin dashboard
8. Add product management
9. Deploy to production
10. Monitor and iterate

---

For detailed API documentation, see `/server/README.md`
