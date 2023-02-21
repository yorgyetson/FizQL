alter table "public"."answers"
  add constraint "answers_categoryId_fkey"
  foreign key ("categoryId")
  references "public"."categories"
  ("id") on update restrict on delete restrict;
