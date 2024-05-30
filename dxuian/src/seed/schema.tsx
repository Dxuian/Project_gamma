
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

import { text, uuid, bigint, primaryKey, unique, pgTable, index } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  by: text('by').notNull(),
  uuid: uuid('uuid').notNull(),
  timestamp: bigint('timestamp',{ mode: 'bigint' }).notNull(),
  title: text('title'),
  content: text('content').notNull(),
  filename: text('filename').unique(),
}, (table) => ({
  pk: primaryKey({ columns: [table.uuid, table.timestamp] }),
  timestampidx: index("timestampidx").on(table.timestamp),
}));