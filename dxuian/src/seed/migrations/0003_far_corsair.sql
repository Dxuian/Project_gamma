CREATE TABLE IF NOT EXISTS "posts" (
	"by" text NOT NULL,
	"uuid" uuid NOT NULL,
	"timestamp" timestamp NOT NULL,
	"title" text,
	"content" text NOT NULL,
	"filename" text
);
--> statement-breakpoint
DROP TABLE "users";