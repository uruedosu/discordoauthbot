const discord = require('discord.js')
const users = require('../../models/users');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const epic = require('../../epic')
module.exports = {
  name: "leave",
  description: "🛑 Makes bot leave",
  default_permission: true,
  timeout: 3000,
  category: "whitelist",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {

    await interaction.reply(`${client.user.username} left the server. Your Invite Link:
https://discord.com/api/oauth2/authorize?client_id=${epic.client_id}&permissions=8&scope=bot `)
    interaction.guild.leave()
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
 async function requestId(access_token) {
  const fetched = await fetch("https://discord.com/api/users/@me", {
      headers: {
          Authorization: `Bearer ${access_token}`,
      },
  });
  const json = await fetched.json();
  return json.id;
}