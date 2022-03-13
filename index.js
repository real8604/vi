const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTUxMjY5MjQzNDE5MjU4OTIw.YilAhQ.6-AJo_ambKi6WZwAT2mlKECKHmY"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hey")
    }
})

client.login(process.env.TOKEN)