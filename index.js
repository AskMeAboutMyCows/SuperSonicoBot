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
const SERVER_ID ="550806423987027989" // this is for nootnoot (grap by right clicking server name top right: must have dev mode enabled is discord)

