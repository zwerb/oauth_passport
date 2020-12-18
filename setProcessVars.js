const {id, secret} = require('./secret');

process.env.GOOGLE_CLIENT_ID = id;
process.env.GOOGLE_CLIENT_SECRET = secret;