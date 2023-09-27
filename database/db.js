const { readFileSync } = require('node:fs')
const { join } = require('node:path')
const Database = require('better-sqlite3')

const db = new Database(process.env.DB_FILE)
console.log(db)

const schemaPath = join('database', 'schema.sql')
const schema = readFileSync(schemaPath, 'utf-8')
db.exec(schema)

const selectTable = db.prepare('SELECT name FROM sqlite_schema')
const result = selectTable.all()
console.log(result)

module.exports = db
