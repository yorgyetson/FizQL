alter table "public"."answers" alter column "gameId" drop not null;
alter table "public"."answers" add column "gameId" uuid;
