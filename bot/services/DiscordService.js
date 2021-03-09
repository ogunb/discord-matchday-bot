const Discord = require('discord.js');

function DiscordService() {
  const client = new Discord.Client();

  const login = () => {
    return new Promise((resolve, reject) => {
      client.once('ready', () => {
        console.info(`Logged in as ${client.user.tag}!`);
        resolve();
      });

      client.once('error', () => {
        console.error(`Failed to login!`);
        reject();
      })

      client.login(process.env.BOT_TOKEN);
    })
  }

  const findChannel = (callback) => {
    return client.channels.cache.find(callback);
  }

  const sendMessage = (channel, message) => {
    channel.send(message);
  }

  return {
    login,
    sendMessage,
    findChannel,
  }
}

module.exports = DiscordService();