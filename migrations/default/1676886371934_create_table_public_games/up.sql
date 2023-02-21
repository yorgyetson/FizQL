CREATE TABLE "public"."games" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "host_id" uuid NOT NULL, "current_round" numeric, "current_answer" uuid, "buzzed_user_id" uuid, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
