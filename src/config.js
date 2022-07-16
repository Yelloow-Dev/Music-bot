require("dotenv").config();

module.exports = {
    token: process.env.TOKEN,  // your bot token
    prefix:  process.env.PREFIX , // bot prefix
    ownerID:  process.env.OWNERID , //your discord id
    SpotifyID:  process.env.SPOTIFYID ,
    SpotifySecret:  process.env.SPOTIFYSECRET ,
    mongourl: process.env.MONGO_URI , // MongoDb URL
    embedColor:  "#00d7ff", // embed colour
    logs: process.env.LOGS || "997074984944029756", // channel id for guild create and delete logs
    links: {
        img: process.env.IMG || 'https://share.creavite.co/hnU9sWu0vo3AUMTG.gif', //setup system background image 
        support: process.env.SUPPORT || 'https://discord.gg/tn38Et8rKj', //support server invite link
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=977742811132743762&permissions=8&scope=bot%20applications.commands' //bot invite link
    },
    nodes: [
        {
            host:"n1.lavalink.milrato.com",
            identifier: "n1.lavalink.milrato.com",
            port: parseInt("10250"),
            password: "discord.gg/milrato",
            secure: parseBoolean("false"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
