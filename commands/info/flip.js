const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "flip",
    description: "Flips a coin and displays heads or tails in an embed",
    usage: "flip",
    aliases: ["coinflip"],
    run: async ({client, message, args}) => {
        let coin = Math.floor(Math.random() * 2)
        let result = coin === 0 ? "heads" : "tails"
        const embed = new Discord.MessageEmbed()
            .setColor(0x00AE86)
            .setTitle("Coinflip")
            .setDescription(`The coin landed on ${result}!`)
        message.channel.send({ embeds: [embed] });
    }
}