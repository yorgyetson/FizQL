CREATE TABLE "public"."answers" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "gameId" uuid NOT NULL, "categoryId" UUID NOT NULL, "answer" text NOT NULL, "question" text, "hasBeenPlayed" boolean NOT NULL DEFAULT false, "type" text NOT NULL DEFAULT 'default', "value" numeric NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
