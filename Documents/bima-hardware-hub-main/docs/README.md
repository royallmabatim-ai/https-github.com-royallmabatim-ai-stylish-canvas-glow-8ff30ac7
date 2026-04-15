# Boma Mabati Factory - Enterprise Website

A modern, scalable, and production-ready e-commerce website for Boma Mabati Factory, built with TypeScript, React, and Node.js.

## 🌟 Features

### Frontend
- ✅ **Modern UI/UX** - Built with React 18, TailwindCSS, shadcn/ui
- ✅ **Type-Safe** - Full TypeScript with strict mode
- ✅ **Form Handling** - React Hook Form + Zod validation
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt, Schema.org
- ✅ **Accessible** - WCAG 2.1 AA compliance, ARIA labels, keyboard nav
- ✅ **Analytics Ready** - Google Analytics 4 & GTM integration
- ✅ **Error Tracking** - Sentry integration configured
- ✅ **Internationalization** - English & Swahili support
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Performance** - Optimized with Vite

### Backend
- ✅ **Express.js API** - RESTful endpoints
- ✅ **PostgreSQL** - Reliable database with Prisma ORM
- ✅ **Validation** - Server-side validation with Zod
- ✅ **Email Service** - Automated confirmations & notifications
- ✅ **Error Handling** - Comprehensive error middleware
- ✅ **CORS** - Properly configured for security
- ✅ **Health Checks** - Monitoring ready

### Business Features
- ✅ **Quote System** - Real-time quote requests with validation
- ✅ **Contact Form** - Fully functional contact submission
- ✅ **Email Notifications** - Automated customer & admin emails
- ✅ **Database Models** - Complete Prisma schema ready

## 🚀 Quick Start

### Frontend

```bash
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run test       # Run tests
```

### Backend

```bash
cd server
npm install
cp .env.example .env.local
# Edit .env.local with your values
npm run db:migrate
npm run dev        # Start backend server
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities & services
│   ├── config/             # Configuration
│   ├── i18n/               # Translations
│   └── App.tsx
├── server/
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── services/       # Business logic
│   │   └── index.ts
│   └── prisma/
│       └── schema.prisma
├── public/                 # Static assets
└── package.json
```

## 📚 Documentation

- [Setup Guide](./COMPLETE_SETUP.md) - Complete installation instructions
- [Development Guide](./DEVELOPMENT.md) - Architecture & implementation details
- [Production Checklist](./PRODUCTION_CHECKLIST.md) - Pre-launch requirements

## 🔒 Security

- ✅ TypeScript strict mode for type safety
- ✅ Input validation on client & server
- ✅ CORS configured
- ✅ Environment variables for secrets
- ✅ Error messages don't leak information
- ✅ Rate limiting ready for implementation

## 📊 Analytics & Monitoring

- **Google Analytics 4**: Track user behavior & conversions
- **Sentry**: Automatic error tracking & reporting
- **Database Logging**: Query logging in development

## 🌍 Internationalization

Supports:
- 🇬🇧 English
- 🇰🇪 Swahili (Kiswahili)

Configure in `src/i18n/config.ts`

## 🎨 Design System

- **UI Library**: shadcn/ui (Radix UI + Tailwind)
- **Colors**: Navy primary, Orange secondary
- **Typography**: Poppins (headings), Open Sans (body)
- **Icons**: Lucide React

## 🧪 Testing

```bash
# Frontend tests
npm run test

# Backend tests  
cd server && npm run test
```

## 📦 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
```

### Backend (Any Node.js host)
```bash
npm run build
npm start
```

## 🔗 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/quotes` | Submit quote request |
| POST | `/api/contact` | Send contact message |
| GET | `/api/products` | List products |
| GET | `/health` | Health check |

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript 5
- Vite
- TailwindCSS
- React Router
- React Hook Form
- Zod
- Tanstack Query
- i18next
- Sentry

### Backend
- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- Zod
- Nodemailer

## 📝 Environment Setup

See `.env.example` files in root and `server/` directories.

## 🤝 Contributing

1. Clone by clicking "Use this template"
2. Create feature branches
3. Commit with clear messages
4. Submit pull requests

## 📞 Support

- Email: support@bomamabati.co.ke
- Phone: 0734 753 416
- WhatsApp: +254 734 753 416

## 📄 License

MIT

## 🎯 Status

**Current Version**: 1.0.0  
**Frontend**: ✅ Production Ready  
**Backend**: ✅ Production Ready  
**Payment Integration**: 🟡 Pending  
**Admin Dashboard**: 🟡 Planned  

---

Built with ❤️ for Boma Mabati Factory

