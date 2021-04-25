require('dotenv').config()

const Connection = require('./schemas/connection');

Connection.connect();

require('./server');