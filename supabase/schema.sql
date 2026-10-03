-- PhysioFit initial schema
-- This file is a foundation for Supabase/PostgreSQL and should be extended before production use.

create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  email text unique,
  phone text,
  role text default 'patient',
  created_at timestamptz default now()
);

create table if not exists services (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text not null,
  description text,
  duration integer not null,
  price numeric(10,2) not null,
  image_url text,
  active boolean default true,
  online_booking boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists appointments (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid references profiles(id) on delete set null,
  service_id uuid references services(id) on delete set null,
  full_name text not null,
  phone text,
  email text,
  appointment_date date not null,
  appointment_time time not null,
  duration integer not null,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'completed', 'cancelled', 'no-show')),
  notes text,
  booking_reference text unique,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists availability (
  id uuid primary key default uuid_generate_v4(),
  working_days text[] not null,
  opening_hour time not null,
  closing_hour time not null,
  breaks text[],
  days_off date[],
  holidays date[],
  blocked_periods text[],
  appointment_duration integer not null,
  buffer_time integer not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists social_posts (
  id uuid primary key default uuid_generate_v4(),
  platform text not null,
  caption text not null,
  image_url text,
  original_url text,
  published_at timestamptz not null,
  featured boolean default false,
  hidden boolean default false,
  created_at timestamptz default now()
);

create table if not exists payments (
  id uuid primary key default uuid_generate_v4(),
  appointment_id uuid references appointments(id) on delete cascade,
  amount numeric(10,2) not null,
  status text not null default 'unpaid' check (status in ('unpaid', 'paid', 'partially paid', 'refunded')),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists notifications (
  id uuid primary key default uuid_generate_v4(),
  appointment_id uuid references appointments(id) on delete cascade,
  type text not null,
  channel text not null default 'email',
  sent_at timestamptz default now(),
  status text default 'queued',
  payload jsonb
);
