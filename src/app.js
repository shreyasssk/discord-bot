require('dotenv').config();
const axios = require('axios');
const joke = require('../commands/joke');
const space = require('../commands/space');
const info = require('../commands/info');

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const embed = new MessageEmbed();

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
});

info(client);
joke(client, axios);
space(client, axios, embed);

client.login(process.env.DISCORD_BOT_TOKEN);