const Discord = require("discord.js")
const dotenv = require("dotenv")
const { REST } = require("@discordjs/rest")
const { Routes} = require("discord-api-types/v9")
const fs = require("fs")
const { Player} = require("discord-player")

dotenv.config()
const TOKEN = process.env.TOKEN 

const LOAD_SLASH = process.argv[2] == "load"
const APP_ID = "974424468174798858"
const GUILD_ID ="550806423987027989" // this is for nootnoot (grap by right clicking server name top right: must have dev mode enabled is discord)

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILDS_VOICE_STATES"
    ]
})

client.slashcommands = new Discord.Collection()
client.player = new Player(client, {
    ytdlOptions : {
        quality : "highestaudio",
        highWaterMark : 1 << 25
    }
})

let commands = []

const slashFiles = fs.readdirSync("./slashcommands").filter (file => file.endsWith(".js"))
for (const file of slashFiles) {
    const slashcmd = require(`./slashcommands/${file}`)
    client.slashcommands.set(slashcmd.data.name, slashcmd)
    if (LOAD_SLASH) commands.push(slashcmd.data.toJSON())
}

//generates url to deploy commands
if (LOAD_SLASH) {
    const rest = new REST({version: 9}).setToken(TOKEN)
    console.log("deploying slash commands")
    rest.put (Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {body: commands})
    .then (() => {
        console.log("succesfully loaded!")
        process.exit(0)
    }) 
    .catch (err => {
        if (err){
            console.log(err)
            process.exit(1)
        }
    })
}
else {
    client.on ("ready", () => {
        console.log ('logged in as ${client.user.tag}') }
    })
    client.on ("interactionCreate", (interaction) => {
        async function handleCommand() {
            if (!interaction.isCommand()) return
            const slashcmd = client.slashcommands.get(interaction.commandName)
            if (!slashcmd) interaction.reply ("unknown command")
            // this lets discord know your bot is thinking so it does not cancel your command

            await interaction.deferReply()
            // this is where the command is actually executed
            





// curly brace languages are something 

