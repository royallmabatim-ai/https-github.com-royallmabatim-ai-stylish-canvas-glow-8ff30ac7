# 📇 QUICK START REFERENCE CARD

**Print this or keep it open while working!**

---

## 🎯 YOUR THREE OPTIONS (Pick One)

### Option A: Test Locally (30 min)
```bash
npm run dev                 # Terminal 1: Frontend http://localhost:5173
cd server && npm run dev    # Terminal 2: Backend http://localhost:3001
npx prisma studio          # Terminal 3: Database http://localhost:5555
```
✅ Then visit http://localhost:5173 and test a form

### Option B: Full Setup (2 hours)
📖 Read: [COMPLETE_SETUP.md](./COMPLETE_SETUP.md)

### Option C: Deploy (3-4 hours)
📖 Read: [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)

---

## 🚀 QUICK COMMANDS

```bash
# Frontend
npm run dev          # Start development server (HMR enabled)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Watch mode for tests

# Backend
cd server
npm run dev          # Start with TypeScript watch (tsx)
npm run build        # Build TypeScript to JS
npm start            # Run production build
npm run db:migrate   # Run database migrations
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database (if seed file exists)

# Database
npx prisma studio            # Visual database editor
npx prisma migrate dev       # Create and run migration
npx prisma generate          # Regenerate Prisma client
```

---

## 🔧 CONFIGURATION (Before First Run)

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:3001
VITE_GA_ID=                    # Your GA4 ID (G-...)
VITE_GTM_ID=                   # Your GTM ID (GTM-...) [optional]
VITE_ENABLE_ANALYTICS=false    # Set true after configuring
```

### Backend (server/.env.local)
```
DATABASE_URL=postgresql://user:pass@localhost:5432/boma
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ENABLE_EMAIL=false             # Set true after configuring
NODE_ENV=development
SENTRY_DSN=                    # Your Sentry DSN [optional]
```

### Production Checklist
- [ ] Database URL for production database
- [ ] Email credentials (tested)
- [ ] Analytics IDs (GA4, GTM)
- [ ] Sentry DSN (optional)
- [ ] Backend deployed and running
- [ ] Frontend environment variables updated
- [ ] DNS pointing to frontend

---

## 📍 WHERE IS EVERYTHING?

### Frontend Files
```
src/
├── App.tsx                    ← App entry point
├── components/
│   ├── HeroSection.tsx       ← Quote form (THE IMPORTANT ONE!)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ... (other components)
├── hooks/
│   ├── use-quote-submit.ts   ← Form submission logic
│   ├── use-contact-submit.ts
│   ├── use-seo.ts            ← Dynamic SEO
│   └── use-accessibility.ts  ← A11y features
├── lib/
│   ├── api-client.ts         ← Backend communication
│   ├── validation.ts         ← Zod schemas
│   ├── analytics.ts          ← GA4 + GTM
│   ├── sentry.ts             ← Error tracking
│   └── utils.ts
├── config/
│   └── env.ts                ← Environment validation
├── i18n/
│   ├── config.ts
│   └── locales/
│       ├── en.json           ← English strings
│       └── sw.json           ← Swahili strings
└── pages/
    ├── Index.tsx
    ├── About.tsx
    ├── Blog.tsx
    └── NotFound.tsx
```

### Backend Files
```
server/
├── src/
│   ├── index.ts              ← Express server
│   ├── config/
│   │   └── env.ts           ← Backend env validation
│   ├── routes/
│   │   ├── quotes.ts        ← Quote API endpoints
│   │   └── contact.ts       ← Contact API endpoints
│   ├── services/
│   │   └── email.ts         ← Email service
│   ├── middleware/
│   │   └── validate.ts      ← Request validation
│   ├── validation/
│   │   └── schemas.ts       ← Zod schemas
│   ├── lib/
│   │   ├── prisma.ts        ← Database client
│   │   └── errors.ts        ← Error utilities
│   └── utils/
│       └── errors.ts        ← Error helpers
├── prisma/
│   ├── schema.prisma        ← Database schema
│   └── migrations/          ← Migration files
├── package.json
├── tsconfig.json
└── .env.local [not in git]
```

### Configuration Files
```
Root/
├── .env.local [git ignored]  ← Your secrets (LOCAL ONLY)
├── .env.example              ← Template (safe to commit)
├── package.json              ← Dependencies
├── tsconfig.json             ← TypeScript config
├── vite.config.ts            ← Vite config
└── vitest.config.ts          ← Test config

server/
├── .env.local [git ignored]  ← Backend secrets (LOCAL ONLY)
├── .env.example              ← Backend template (safe)
├── package.json              ← Backend dependencies
├── tsconfig.json             ← Backend TypeScript config
└── prisma/schema.prisma      ← Database schema
```

---

## 🧪 TESTING LOCALLY

### Step 1: Start Servers
```bash
# Terminal 1
npm run dev
# Should show: ✓ VITE v4.x.x  ready in 123 ms

# Terminal 2
cd server
npm run dev
# Should show: Server running on http://localhost:3001

# Terminal 3 (optional but recommended)
npx prisma studio
# Opens Prisma Studio at http://localhost:5555
```

### Step 2: Test the Form
1. Open http://localhost:5173
2. Scroll to "Get Free Quote" form
3. Fill fields:
   - Name: Test User
   - Email: test@example.com
   - Phone: +254712345678 (Kenyan format)
   - Product Interest: Any value
   - Location: Nairobi
4. Click Submit
5. Should see: ✅ "Quote Submitted! We'll contact you..."

### Step 3: Verify It Worked
- **Check Terminal 2** for log: `POST /api/quotes` with 201 status
- **Check Prisma Studio** for new quote in database
- **Check .env setting** for ENABLE_EMAIL (if true, should see email)

### Troubleshooting
```
❌ "Connection refused" → Backend not running (Terminal 2)
❌ "404 Not Found" → Check API URL is correct
❌ "Database error" → Check DATABASE_URL in server/.env.local
❌ "CORS error" → Check backend has CORS enabled
```

---

## 📊 TESTING ANALYTICS

### Google Analytics 4
```
1. Visit http://localhost:5173
2. Open DevTools → Network tab
3. Fill and submit quote form
4. Search for "google-analytics" in network tab
5. Should see requests to google-analytics.com
```

### Test Events
```
Quote Submission Event:
- Go to GA4 dashboard
- Real-time → Should show events appearing
- Look for: "quote_submitted" event

Product View Event:
- Click on different products
- Real-time → Should show "product_viewed" events
```

---

## 🐛 DEBUGGING TIPS

### Forms Not Submitting
```
1. Check: Is backend running?
   → Terminal 2 should show "Server running on :3001"

2. Check: DevTools Console
   → Look for error messages

3. Check: DevTools Network
   → Look at POST request to /api/quotes
   → Check response status and body

4. Check: Backend logs
   → Terminal 2 should show the request

5. Common issues:
   - Backend not running
   - Wrong API URL in .env.local
   - Invalid CSRF token
   - CORS blocked
```

### Database Issues
```
1. Check: Is DATABASE_URL set?
   → Run: echo $DATABASE_URL (Terminal 2)

2. Check: Prisma connection
   → Run: npx prisma db push

3. Check: Can you see data?
   → Run: npx prisma studio

4. Common issues:
   - Wrong connection string
   - Database doesn't exist
   - PostgreSQL not running
   - Wrong credentials
```

### Email Not Sending
```
1. Check: ENABLE_EMAIL=true in server/.env.local

2. Check: EMAIL_USER and EMAIL_PASSWORD set

3. Check: Gmail app password (not regular password)

4. Check: Logger output
   → Terminal 2 should show email sending

5. Common issues:
   - ENABLE_EMAIL=false
   - Wrong email password
   - Gmail 2FA not enabled
   - App password not created
```

### Analytics Not Tracking
```
1. Check: VITE_GA_ID set in .env.local

2. Check: VITE_ENABLE_ANALYTICS=true

3. Check: DevTools Network
   → Should see calls to google-analytics.com

4. Check: GA4 Dashboard
   → Real-time tab should show events

5. Common issues:
   - GA ID wrong or missing
   - Analytics disabled
   - Adblocker blocking analytics
   - Wrong account ID
```

---

## 📞 QUICK HELP

| Problem | Check | Solution |
|---------|-------|----------|
| "Cannot find module" | Terminal 2 | Run `npm install` in server folder |
| "Cannot connect to database" | .env.local | Check DATABASE_URL is correct |
| "Email not sending" | server/.env.local | Check EMAIL_USER, EMAIL_PASSWORD |
| "Port already in use" | Ports 5173, 3001, 5555 | Kill process: `lsof -i :3001` |
| "TypeScript error" | tsconfig.json | Check strict mode is enabled |
| "CORS blocked" | Backend | Check CORS middleware in index.ts |
| "Form submits but nothing happens" | DevTools | Check error in console |

---

## 🎯 DEPLOYMENT CHECKLIST

### Before Deploying (Do These First!)
- [ ] Test everything locally (all three terminals)
- [ ] Check TypeScript compilation: `npm run build`
- [ ] Run tests: `npm run lint`
- [ ] Review environment variables
- [ ] Setup external database (Railway/Heroku)
- [ ] Setup email service (Gmail app password)
- [ ] Backup important data
- [ ] Have deployment URLs ready

### Deployment Steps
1. **Build**: `npm run build && cd server && npm run build`
2. **Database**: Run migrations on production
3. **Backend**: Deploy to Railway/Render (push to GitHub)
4. **Frontend**: Deploy to Netlify/Vercel (push to GitHub)
5. **Configure**: Update environment variables on deployed services
6. **Test**: Full end-to-end test on production URL
7. **Monitor**: Setup Sentry, Analytics dashboards
8. **DNS**: Point domain to frontend
9. **Launch**: ✅ You're live!

---

## 📚 DOCUMENTATION QUICK LINKS

| Need | Read |
|------|------|
| How to start? | [START_HERE.md](./START_HERE.md) |
| Daily commands | [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) ← BOOKMARK |
| Architecture | [DEVELOPMENT.md](./DEVELOPMENT.md) |
| Deployment | [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md) |
| Setup | [COMPLETE_SETUP.md](./COMPLETE_SETUP.md) |
| API endpoints | [server/README.md](./server/README.md) |
| Something else | [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) |

---

## ✅ SUCCESS CHECKLIST

You're doing it right if:

**Local Development**
- [ ] npm run dev shows no errors
- [ ] Backend logs show requests
- [ ] Forms submit successfully
- [ ] Data appears in Prisma Studio

**Configuration**
- [ ] .env.local has all required variables
- [ ] Database connects successfully
- [ ] Email can send (if enabled)
- [ ] Analytics script loads

**Deployment**
- [ ] Build completes without errors
- [ ] Backend runs on production
- [ ] Frontend loads at your domain
- [ ] Forms work in production
- [ ] Errors caught by Sentry

---

## 🚀 READY TO START?

### Next Action (Pick One)

1. **Test Locally**
   ```bash
   npm run dev
   cd server && npm run dev
   # Visit http://localhost:5173
   ```

2. **Full Setup**
   → Read [COMPLETE_SETUP.md](./COMPLETE_SETUP.md)

3. **Deploy**
   → Read [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)

4. **Help**
   → Read [YOUR_ACTION_CHECKLIST.md](./YOUR_ACTION_CHECKLIST.md)

---

**Print this card and keep it open! 📇**

**Commands on left, links on right - everything you need!**

**Start now: `npm run dev` 🚀**
