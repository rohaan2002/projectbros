// import { defineConfig } from 'drizzle-kit'
// export default defineConfig({
//  schema: "./schema.ts",
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: process.env.DB_URL,
//   },
//   verbose: true,
//   strict: true,
// })
import { defineConfig } from "drizzle-kit"
export default defineConfig({
    schema: "./src/db/schema.ts",
    dialect: "postgresql", // "postgresql" | "mysql"
    // driver: "turso", // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
    dbCredentials: {
        url: process.env.DATABASE_URL!
    },
    verbose: true,
    strict: true
})