
-- Enum-like check constraints kept as TEXT for flexibility
CREATE TABLE public.admission_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  guardian_phone TEXT,
  program TEXT NOT NULL CHECK (program IN ('SSC','HSC','Admission')),
  target_subjects TEXT,
  preferred_branch TEXT NOT NULL CHECK (preferred_branch IN ('Uttara','Patuatuli')),
  preferred_batch TEXT NOT NULL CHECK (preferred_batch IN ('Dawn','Zenith','Prime','Vesper')),
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.admission_requests ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous visitors) can submit a request
CREATE POLICY "Anyone can submit admission requests"
ON public.admission_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public SELECT/UPDATE/DELETE policies — submissions remain private.
-- Admins will read via service role (server-side) in future tooling.
