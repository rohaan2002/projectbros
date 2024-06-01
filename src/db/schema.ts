import { text, pgTable } from "drizzle-orm/pg-core";

export const mySchemaUsers = pgTable('users', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  
});