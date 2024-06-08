CREATE TABLE IF NOT EXISTS "user" (
	"id" text NOT NULL,
	"name" text,
	"password" text NOT NULL,
	"email" text PRIMARY KEY NOT NULL
);
