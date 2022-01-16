module.exports = {
    name: "hi",
    aliases: ["hello","hey","Hi","Hello","Hey"],
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("Hello there!")
    }
}