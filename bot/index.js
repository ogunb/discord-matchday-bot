const DiscordService = require('./services/DiscordService');
const TwitterService = require('./services/TwitterService');

function sendMatchMessage(event, context) {
  DiscordService.login().then(() => {
    TwitterService.fetchTotallyLegitMatchUrl().then(matchUrl => {
      const data = JSON.parse(Buffer.from(event.data, 'base64').toString());

      const channel = DiscordService.findChannel((channel) => {
        return channel.name === process.env.CHANNEL_NAME
      });

      DiscordService.sendMessage(channel, `${data.event} - ${matchUrl}`);
    })
  });
};

module.exports = { sendMatchMessage };

