CREATE TABLE "public"."categories" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "gameId" UUID NOT NULL, "name" text NOT NULL, "position" numeric NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("gameId") REFERENCES "public"."games"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
