# PhysioFit

PhysioFit is a modern healthcare and wellness platform for physiotherapist Gitana, combining physiotherapy, massage and wellness services with a patient-friendly booking flow and an admin dashboard for appointments, services, and business management.

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- Supabase

## Features

- Responsive public website with home, about, physiotherapy, massage, services, booking, social and contact pages
- Booking workflow with service selection, time-slot logic and manual approval
- Admin dashboard prototype for appointments, overview, and service visibility
- Central social links configuration with placeholders for real URLs
- Environment variable setup for Supabase connection
- Database schema starter for future patient, booking, and service management

## Local installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000 to view the website.

## Environment variables

Create a local file named `.env.local` and add your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Do not commit `.env.local` or any real API keys or secrets. Keep service-role credentials only in the server environment and never expose them in frontend code.

## Supabase setup

1. Create a Supabase project.
2. Copy the project URL and anon key into `.env.local`.
3. Use the schema in `supabase/schema.sql` as the starting point for tables such as services, appointments, patients, availability, and social posts.
4. Configure row-level security (RLS) and access policies before production use.

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Production build

```bash
npm run build
npm run start
```

## Notes

- Use placeholders wherever real patient, clinic, or business information is not yet available.
- Booking prices and availability should be managed from the database instead of hard-coded in the frontend.
- This project is structured for future expansion into a shared backend for a mobile app.

