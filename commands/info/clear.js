const Discord = require('discord.js');
const { MessageEmbed , Permissions } = require('discord.js');
module.exports = {
    name: 'clear',
    category: 'info',
    aliases: ['purge', 'delete', 'remove'],
    permissions: [Permissions.FLAGS.MANAGE_MESSAGES],
    devOnly: false,
    description: 'Clears a certain number of messages from the channel',
    run: async ({client, message, args}) => {
        if(isNaN(args[0])) return message.channel.send('Please specify a valid number.');
        if(args[0] > 100) return message.channel.send('Please specify a number less than 100.');
        if(args[0] < 1) return message.channel.send('Please specify a number greater than 1.');
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Successfully deleted ${args[0]} messages.`);
        });
    }
}