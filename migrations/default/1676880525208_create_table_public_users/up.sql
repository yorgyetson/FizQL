CREATE TABLE "public"."users" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "username" text NOT NULL, "email" text, "password" text, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
