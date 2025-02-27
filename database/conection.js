const { Client } = require('pg');

const client = new Client({
    user: 'yourUsername',
    host: 'yourHost',
    database: 'yourDatabase',
    password: 'yourPassword',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = client;