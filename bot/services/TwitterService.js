const fetch = require('node-fetch');

function TwitterService() {
  const baseUrl = "https://api.twitter.com/2"

  const fetchTotallyLegitMatchUrl = async () => {
    return fetch(`${baseUrl}/users/by/username/${process.env.TOTALLY_LEGIT_TWITTER_USER}?user.fields=url`, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_AUTH_TOKEN}`
      }
    }).then((response) => response.json())
    .then(({ data }) => data.url)
  }

  return {
    fetchTotallyLegitMatchUrl
  }
}

module.exports = TwitterService();
