-- Roll Call: schema + seed data
-- Run this once in Supabase: Project > SQL Editor > New query > paste > Run

create table provinces (
  id text primary key,
  name text not null,
  out_of_school_children bigint not null,
  out_of_school_rate numeric not null,
  age_cohort bigint not null
);

create table districts (
  id text primary key,
  name text not null,
  province_id text references provinces(id) not null,
  note text
);

create table schools (
  id text primary key,
  name text not null,
  district_id text references districts(id) not null,
  province_id text references provinces(id) not null,
  level text not null,
  type text not null
);

create table flagged_children (
  id uuid primary key default gen_random_uuid(),
  district_id text references districts(id) not null,
  note text not null,
  created_at timestamptz default now()
);

-- Public read access (this is public education data, no auth needed to view)
alter table provinces enable row level security;
alter table districts enable row level security;
alter table schools enable row level security;
alter table flagged_children enable row level security;

create policy "public read provinces" on provinces for select using (true);
create policy "public read districts" on districts for select using (true);
create policy "public read schools" on schools for select using (true);
create policy "anyone can flag a child" on flagged_children for insert with check (true);

-- Seed: provinces (source: UNICEF Pakistan, Education overview, 2026)
insert into provinces (id, name, out_of_school_children, out_of_school_rate, age_cohort) values
  ('punjab', 'Punjab', 9700000, 27, 35900000),
  ('sindh', 'Sindh', 7400000, 44, 16800000),
  ('kp', 'Khyber Pakhtunkhwa', 4500000, 34, 13200000),
  ('balochistan', 'Balochistan', 3500000, 69, 5100000),
  ('ict', 'Islamabad Capital Territory', 90000, 15, 600000);

-- Seed: districts (illustrative granularity for MVP)
insert into districts (id, name, province_id, note) values
  ('lahore', 'Lahore', 'punjab', 'Lower rate, urban'),
  ('rajanpur', 'Rajanpur', 'punjab', 'Higher rate, rural south'),
  ('karachi-east', 'Karachi East', 'sindh', 'Mixed urban'),
  ('tharparkar', 'Tharparkar', 'sindh', 'High rate, rural'),
  ('peshawar', 'Peshawar', 'kp', 'Provincial capital'),
  ('tank', 'Tank', 'kp', 'High rate, remote'),
  ('quetta', 'Quetta', 'balochistan', 'Provincial capital'),
  ('kharan', 'Kharan', 'balochistan', 'Highest rate, remote'),
  ('islamabad', 'Islamabad', 'ict', 'Federal territory');

-- Seed: schools (illustrative sample listings)
insert into schools (id, name, district_id, province_id, level, type) values
  ('s1', 'Govt. Primary School Model Town', 'lahore', 'punjab', 'Primary', 'Government'),
  ('s2', 'Govt. Girls Middle School Township', 'lahore', 'punjab', 'Middle', 'Government'),
  ('s3', 'Govt. Boys Primary School Rajanpur City', 'rajanpur', 'punjab', 'Primary', 'Government'),
  ('s4', 'The Citizens Foundation School', 'rajanpur', 'punjab', 'Primary', 'Subsidized'),
  ('s5', 'Govt. Girls Secondary School Gulshan', 'karachi-east', 'sindh', 'Secondary', 'Government'),
  ('s6', 'Sindh Education Foundation School', 'tharparkar', 'sindh', 'Primary', 'Subsidized'),
  ('s7', 'Govt. High School Peshawar Cantt', 'peshawar', 'kp', 'Secondary', 'Government'),
  ('s8', 'Govt. Primary School Tank Bazaar', 'tank', 'kp', 'Primary', 'Government'),
  ('s9', 'Govt. Boys Middle School Quetta', 'quetta', 'balochistan', 'Middle', 'Government'),
  ('s10', 'BEF Community School Kharan', 'kharan', 'balochistan', 'Primary', 'Subsidized'),
  ('s11', 'Islamabad Model School G-9', 'islamabad', 'ict', 'Primary', 'Government');
