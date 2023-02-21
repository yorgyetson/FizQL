CREATE TABLE "public"."game_players" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "gameId" uuid NOT NULL, "playerId" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("gameId") REFERENCES "public"."games"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("playerId") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
