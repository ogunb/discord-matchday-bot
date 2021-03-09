const DiscordService = require('./services/DiscordService');

function sendMatchMessage() {
  DiscordService.login().then(() => {
    const channel = DiscordService.findChannel((channel) => {
      return channel.name === process.env.CHANNEL_NAME
    });

    DiscordService.sendMessage(channel, 'sa');
  });
};

module.exports = { sendMatchMessage };

