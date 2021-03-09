const DiscordService = require('./services/DiscordService');

function sendMatchMessage(req, res) {
  DiscordService.login().then(() => {
    const channel = DiscordService.findChannel((channel) => {
      return channel.name === process.env.CHANNEL_NAME
    });

    DiscordService.sendMessage(channel, 'sa');
    res.send("OK")
  });
};

module.exports = { sendMatchMessage };

