const { CommentStream } = require("snoostorm");
require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');
  
//This creates a new instance of snoowrap for us with our environment variables.
const r = new Snoowrap({
    userAgent: 'scrapy',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
//This creates a new client to easily access the stream of Reddit comments through snoowrap
const stream = new CommentStream(r, { subreddit: "all", results: 25 });

stream.on("item", comment => {
    console.log(comment)
})