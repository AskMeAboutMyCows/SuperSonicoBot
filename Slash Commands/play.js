const {SlashCommandBuilder} = require("@discordjs/builders")
const {MessageEmbed} = require("discord.js")
const { QueryType } = require("discord-player")

module.exports = {
    data = new SlashCommandBuilder()
        .setName("play")
        .setDescription("Plays a song")
        .addSubcommand((subcommand)=>
            subcommand.setName("song")
                .setDescription("loads a single song from a url")
                .addStringOption((option)=> option.setName("url").setDescription("the url of the song").setRequired(true))
        )
        .addSubcommand((subcommand)=>
            subcommand.setName("playlist")
                .setDescription("loads a playlist from a url")
                .addStringOption((option)=> option.setName("url").setDescription("the url of the playlist").setRequired(true))
        .addSubcommand.setName("search").setDescription("searches for a song based on keywords and plays it"))
        .addStringOption ((option)=> option.setName("searchterms").setDescription("the search keyword").setRequired(true))
    

}
