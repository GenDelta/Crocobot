//make a command to kick someone from the server 
const Discord = require('discord.js');
const { MessageEmbed , Permissions } = require('discord.js');
module.exports = {
    name: 'kick',
    category: 'info',
    aliases: ['k'],
    permissions: [Permissions.FLAGS.KICK_MEMBERS],
    devOnly: false,
    description: 'Kicks a user from the server',
    run: async ({client, message, args}) => {
        if(!message.mentions.users.size) return message.channel.send('Please specify a user to kick.');
        const member = message.mentions.members.first();
        if(!member) return message.channel.send('Please specify a user to kick.');
        if(!member.kickable) return message.channel.send('I cannot kick this user.');
        if(!args[1]) return message.channel.send('Please specify a reason for the kick.');
        const reason = args.slice(1).join(' ');
        member.kick(reason).then(() => {
            message.channel.send(`Successfully kicked ${member.user.tag}`);
        }).catch(err => {
            message.channel.send('I was unable to kick the member.');
            console.error(err);
        });
    }
}