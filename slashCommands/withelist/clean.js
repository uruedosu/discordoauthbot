const discord = require('discord.js')
const users = require('../../models/users');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
  name: "clean",
  description: "🧹 Cleans the db",
  default_permission: true,
  timeout: 3000,
  category: "whitelist",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {

    const data = await users.find()
    var count = 0;
    var permarr = data
    const array_of_members = permarr;

    await interaction.reply({embeds: [new discord.MessageEmbed().setDescription(`*Removing invalid members from db...**`)]})

    for (let i = 0; i < array_of_members.length; i++) {
      try {
        const access_token = array_of_members[i].accessToken;
        
        fetch("https://discord.com/api/users/@me", { headers: { Authorization: `Bearer ${access_token}`}}).then(async(response) => {
          await response.json().catch((err) => {});
          let { status } = response;
          if (status == 401) {
            count++;
            await users.findOneAndDelete({ accessToken: access_token });
          }
          if (status == 429) {
            console.log("Ratelimited");
            console.log(parseInt(response.headers.get("retry-after")));
            await sleep(parseInt(response.headers.get("retry-after")));
          }
        })
        
      } catch (e) {

      }
    }
    await sleep(10000)
    interaction.editReply({
      embeds: [{
          title: "Members removed from db",
          description: `**${count} members removed**`,
      }],
  });
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}