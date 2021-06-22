const { Pool } = require('pg')
require('dotenv').config();

if (!process.env.DATABASE_URL) throw new Error('Enviroment variable DATABASE_URL must be set')

var connectionString = process.env.DATABASE_URL;
const params = new URL(process.env.DATABASE_URL);
const options = {
    connectionString,
    ssl: { rejectUnauthorized: false }
}

console.log(options)
module.exports = new Pool(options);