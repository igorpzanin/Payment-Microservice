const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER || 'user',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'ecommerce',
  password: process.env.PGPASSWORD || 'password',
  port: process.env.PGPORT || 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
