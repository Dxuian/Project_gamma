
// import { timestamp } from "drizzle-orm/mysql-core";
// import { table } from "console";
// import { pgTable, serial, text, uuid, varchar ,bigint ,timestamp , primaryKey , index } from "drizzle-orm/pg-core";




// export const posts = pgTable('posts', {
//   by: text('by').notNull(),
//   uuid: uuid('uuid').notNull(),
//   timestamp: bigint('timestamp').notNull(),
//   title: text('title'),
//   content: text('content').notNull(),
//   filename: text('filename').unique(),
// } , (table) => {
//   return {
//     pk: primaryKey({columns: [table.uuid, table.timestamp]}),
//     timestampidx : index("timestampidx").on(table.timestamp)
//   }
// })

import { text, uuid, bigint, primaryKey, unique, pgTable, index, boolean } from 'drizzle-orm/pg-core';
import { string } from 'zod';

export const posts = pgTable('posts', {
  by: text('by').notNull(),
  uuid: uuid('uuid').notNull(),
  timestamp: bigint('timestamp',{ mode: 'bigint' }).notNull(),
  title: text('title'),
  content: text('content').notNull(),
  filename: text('filename').unique(),
  hidden: boolean('hidden').notNull().default(false),
}, (table) => ({
  pk: primaryKey({ columns: [table.uuid, table.timestamp] }),
  timestampidx: index("timestampidx").on(table.timestamp),
}));


export const users = pgTable("user", {
  id: text("id")
     .notNull()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  password: text("password").notNull(),
  email: text("email").primaryKey(),
});


export const addordel  =  pgTable('addordel', {
  string: text('string').notNull(),
  when: text('when').notNull(),
})