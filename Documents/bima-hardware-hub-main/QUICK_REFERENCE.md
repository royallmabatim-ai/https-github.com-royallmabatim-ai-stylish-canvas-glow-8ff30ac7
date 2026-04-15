# Quick Reference Card

## 🚀 Starting the Servers

```bash
# Terminal 1: Frontend (automatic reload)
npm run dev
# Open: http://localhost:5173

# Terminal 2: Backend (automatic reload)
cd server
npm run dev
# API: http://localhost:3001
# Health: http://localhost:3001/health

# Terminal 3: Database Admin UI
cd server
npx prisma studio
# Open: http://localhost:5555
```

## 📝 API Endpoints

```bash
# Submit Quote
POST http://localhost:3001/api/quotes
Body: { name, email, phone, productInterest, location, requirements, wantCallback }
Response: { success: true, data: { quoteId: "..." } }

# Get Quote
GET http://localhost:3001/api/quotes/:id
Response: { success: true, data: { Quote object } }

# Submit Contact
POST http://localhost:3001/api/contact
Body: { name, email, phone, subject, message }
Response: { success: true, data: { messageId: "..." } }

# Get Contact Messages (admin)
GET http://localhost:3001/api/contact
Response: { success: true, data: [ Messages array ] }

# Health Check
GET http://localhost:3001/health
Response: { status: "ok", timestamp: "2026-04-15T..." }
```

## 🗄️ Database Commands

```bash
cd server

# Create new migration
npm run db:migrate

# Generate Prisma client after schema changes
npm run db:push

# Open database admin UI
npx prisma studio

# Seed database with test data (when seed.ts exists)
npm run db:seed

# View database logs
npm run dev -- --log-level debug
```

## 🔧 Environment Variables

### Frontend: Create `.env.local` in root

```
VITE_API_URL=http://localhost:3001
VITE_GA_ID=G-XXXXX
VITE_GTM_ID=GTM-XXXXX
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_ERROR_TRACKING=false
```

### Backend: Create `server/.env.local`

```
PORT=3001
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/boma_mabati
JWT_SECRET=temporary_secret_for_development
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=noreply@bomamabati.co.ke
FRONTEND_URL=http://localhost:5173
ENABLE_EMAIL=false
ENABLE_PAYMENTS=false
```

## 📧 Email Setup (Gmail)

1. Go to myaccount.google.com
2. Security → App passwords
3. Select Mail & Windows Computer
4. Copy password
5. Paste in `EMAIL_PASSWORD` in .env.local
6. Set `ENABLE_EMAIL=true`

## 📊 Analytics Setup

### Google Analytics 4
1. Go to analytics.google.com
2. Create account → Web property
3. Copy Measurement ID (G-XXXXX)
4. Paste in `VITE_GA_ID`
5. Set `VITE_ENABLE_ANALYTICS=true`
6. Test: `npm run dev`, open DevTools → Network, should see calls to google-analytics.com

### Google Tag Manager
1. Go to tagmanager.google.com
2. Create account → Web container
3. Copy Container ID (GTM-XXXXX)
4. Paste in `VITE_GTM_ID`
5. Set up goals/events in GTM UI later

## 🐛 Error Tracking (Sentry)

1. Go to sentry.io (create free account)
2. Create project → Select React
3. Copy DSN
4. Paste in `VITE_SENTRY_DSN`
5. Set `VITE_ENABLE_ERROR_TRACKING=true`
6. Errors will auto-appear in Sentry dashboard

## 🗄️ PostgreSQL Setup

### Using Heroku (Free)
```bash
# Create free database
heroku pg:create
# Get connection string from Heroku dashboard
# Paste in DATABASE_URL in .env.local
```

### Using Local PostgreSQL
```bash
# macOS
brew install postgresql
brew services start postgresql

# Linux
sudo apt-get install postgresql

# Windows: Download from postgresql.org

# Create database
createdb boma_mabati

# Connection string:
DATABASE_URL=postgresql://localhost/boma_mabati
```

## 🧪 Testing Forms Locally

### Quote Form
1. Go to http://localhost:5173
2. Enter all fields with valid Kenyan phone (e.g., 0734753416)
3. Click "Get My Free Quote"
4. Should succeed with message
5. Check `npx prisma studio` → Quote table has new entry

### Contact Form
1. Go to http://localhost:5173/#contact
2. Scroll to footer
3. Fill contact form
4. Click submit (if exists in your version)
5. Check database

## 🔄 Common Workflows

### Add a New Database Field
1. Edit `server/prisma/schema.prisma`
2. Add field to model
3. Run `npm run db:migrate`
4. Type will auto-update in API

### Add a New API Endpoint
1. Create route in `server/src/routes/new-route.ts`
2. Import in `server/src/index.ts`
3. Use: `app.use('/api/new', routerImport)`
4. Call from frontend with `apiClient.post('/api/new', data)`

### Add New Translation
1. Add to `src/i18n/locales/en.json`
2. Add to `src/i18n/locales/sw.json`
3. Use in component: `const { t } = useTranslation(); t('key')`

### Track New Event
1. Import `trackEvent` from '@/lib/analytics'
2. Call: `trackEvent('category', 'action', 'label', value)`
3. See in Google Analytics dashboard next day

## 🚀 Deployment

### Frontend (Netlify)
```bash
# Build
npm run build

# Output in: dist/

# Deploy:
# Connect GitHub to Netlify UI
# Auto-deploys on push to main
```

### Backend (Render/Railway)
```bash
# Build
npm run build

# Deploy:
# 1. Create account on render.com or railway.app
# 2. Connect GitHub
# 3. Set environment variables
# 4. Deploy
# 5. Get URL (e.g., https://api.bomamabati.com)
# 6. Update frontend VITE_API_URL
```

## 🐛 Debugging Tips

### Frontend Issues
```bash
# Check console errors
DevTools → Console

# Check network requests
DevTools → Network → look for failed requests

# Check React state
React DevTools extension → Components

# Check stores
console.log via useEffect
```

### Backend Issues
```bash
# Check server logs (in terminal running npm run dev)
Look for errors printed

# Check database
npx prisma studio → browse tables

# Check environment
console.log(env) in server/src/config/env.ts

# Check request
console.log(req.body) in route handler
```

## 📱 Mobile Testing

```bash
# Frontend on phone
npm run dev
# Use your computer's IP, not localhost
# http://YOUR_IP:5173

# Backend on phone
# Same as above: http://YOUR_IP:3001/health
```

## 🔒 Security Reminders

✅ Never commit `.env` or `.env.local`  
✅ Never push secrets to GitHub  
✅ Use App Passwords, not actual Gmail password  
✅ Rotate secrets monthly in production  
✅ Always validate server-side  
✅ Use HTTPS in production  
✅ Keep dependencies updated  

## 📞 Quick Help

| Issue | Solution |
|-------|----------|
| `npm install` fails | Delete node_modules, package-lock.json, retry |
| API 404 | Check backend is running, check URL spelling |
| Database error | Check DATABASE_URL, verify PostgreSQL running |
| Form not submitting | Check DevTools Network, check API response |
| Analytics not tracking | Check VITE_GA_ID, check VITE_ENABLE_ANALYTICS=true |
| Email not sending | Check EMAIL_USER/PASSWORD, check ENABLE_EMAIL=true |
| Type errors | Run `tsc --noEmit`, check tsconfig strict mode |

---

**Bookmark this page!** 📖
