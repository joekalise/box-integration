require('dotenv').config();

const axios = require('axios');

const CLIENT_ID = process.env.BOX_CLIENT_ID;
const CLIENT_SECRET = process.env.BOX_CLIENT_SECRET;
const REDIRECT_URI = process.env.BOX_REDIRECT_URI;

const LOKALISE_TOKEN = process.env.LOKALISE_TOKEN;
