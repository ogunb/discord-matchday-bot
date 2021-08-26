const DiscordService = require('./services/DiscordService');

function sendMatchMessage(event, context) {
  DiscordService.login().then(() => {
    const data = JSON.parse(Buffer.from(event.data, 'base64').toString());

    const channel = DiscordService.findChannel((channel) => {
      return channel.name === process.env.CHANNEL_NAME
    });

    DiscordService.sendMessage(channel, `${data.event}`);
  });
};

module.exports = { sendMatchMessage };

