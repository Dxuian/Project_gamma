ALTER TABLE "posts" ADD CONSTRAINT "posts_uuid_timestamp_pk" PRIMARY KEY("uuid","timestamp");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "timestampidx" ON "posts" ("timestamp");--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_filename_unique" UNIQUE("filename");