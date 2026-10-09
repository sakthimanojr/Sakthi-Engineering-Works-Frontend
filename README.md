# Frontend – public website

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS. English + Tamil. No database here: data comes from the backend (`BACKEND_URL`).

```bash
npm install
cp .env.example .env
npm run dev          # http://localhost:3000
npm run lint && npm run build && npm run start
```
Node.js 20.9+ required (needs a Node server – plain static/PHP hosting cannot run it).

## Environment (`.env`)
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (set **before** building) |
| `BACKEND_URL` | Backend base URL. Empty = demo mode |
| `BACKEND_API_KEY` | Secret shared with backend `FRONTEND_API_KEY` (server-only) |
| `REVALIDATE_SECRET` | Secret shared with backend; lets the admin refresh the site instantly |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_PHONE_NUMBER`, `NEXT_PUBLIC_EMAIL` | Contact details |
| `OFFICE_MAP_URL`, `FACTORY_MAP_URL` | Directions links (fallback: address search) |
| `FACEBOOK_URL`, `INSTAGRAM_URL`, `YOUTUBE_URL`, `LINKEDIN_URL`, `GOOGLE_BUSINESS_URL`, `OTHER_SOCIAL_URL` | Shown in footer only when set |
| `NEXT_PUBLIC_DESCRIPTOR` | Temporary descriptor (no official tagline yet) |

## Content
- Projects and gallery photos: managed in the backend admin. Fallbacks: `data/projects.ts` (placeholders) and `public/images/gallery/` (placeholder photos named `<category>--<name>.jpg`).
- Logo: put `logo.png`, `logo-white.png`, `favicon.png` in `public/images/logo/`.
- Hero / factory / machinery / about / service photos: replace the files in `public/images/...` keeping the same names.
- Text: `i18n/en.ts`, `i18n/ta.ts`. Services: `data/services.ts`. Machinery & project types: `data/machinery.ts`.
- Enquiries: the form posts to `/api/enquiry`, which validates and forwards to the backend with the secret key.
