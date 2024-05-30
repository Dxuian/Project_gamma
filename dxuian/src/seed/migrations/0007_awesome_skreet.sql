CREATE TABLE IF NOT EXISTS "posts" (
	"by" text NOT NULL,
	"uuid" uuid NOT NULL,
	"timestamp" bigint NOT NULL,
	"title" text,
	"content" text NOT NULL,
	"filename" text,
	CONSTRAINT "posts_uuid_timestamp_pk" PRIMARY KEY("uuid","timestamp"),
	CONSTRAINT "posts_filename_unique" UNIQUE("filename")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "timestampidx" ON "posts" ("timestamp");