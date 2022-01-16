module.exports = {
    name: "Hi",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("Hello there!")
    }
}