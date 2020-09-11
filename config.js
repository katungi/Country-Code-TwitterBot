require('dotenv').config();

module.exports = {
    subdomain: "api", // "api" is the default (change for other subdomains)
    version: "0.0.1", // version "1.1" is the default (change for other subdomains)
    consumer_key: process.env.consumer_key, // from Twitter.
    consumer_secret: process.env.consumer_secret, // from Twitter.
    access_token_key: process.env.access_token_key, // from your User (oauth_token)
    access_token_secret: process.env.access_token_secret
}

