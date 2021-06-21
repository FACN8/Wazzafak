const { Pool } = require('pg')
require('dotenv').config();

if (!process.env.DATABASE_URL) throw new Error('Enviroment variable DATABASE_URL must be set')

const params = new URL(process.env.DATABASE_URL);
const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.MAX_CONNECTION || 2,
    user: params.username,
    password: params.password,
    ssl: params.hostname !== 'localhost'
}

module.exports = new Pool(options);