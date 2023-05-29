module.exports = {
  name: 'ready',
  once: true,

  async execute(client) {
    console.log(`[LOG] ${client.user.tag} is now online!\n[LOG] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[LOG] Bot serving ${client.users.cache.size} users`);

    client.user.setActivity('Listening For You', {
      type: 'STREAMING',
      url: 'https://www.twitch.tv/1vx2rich'
    });
  }
}
