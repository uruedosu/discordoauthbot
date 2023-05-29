const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "giveaway",
  description: "📨 Sends Button",
  default_permission: true,
  timeout: 3000,
  category: "util",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {
    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageButton()
        .setStyle('LINK')
        .setURL(`${epic.authLink}`)
        .setLabel("🎉 Enter")
    );

    interaction.channel.send({
      content: "🎉 **Giveaway** 🎉",
      embeds: [{
        title: "**1 Month Nitro Boost 🎁**",
        description: "\nWinners: `1`\nTimer: `Ending in 2 hours`\nHosted by: <@" + interaction.user.id + ">\n\n\n\n:tada: To participate in the giveaway, click the button below.",
        color: 0,
        image: {
          url: "https://i.ibb.co/54xmJfm/Capture-decran-le-2022-12-30-a-15-58-02.png"
        }
      }],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: "🎉 Enter",
              url: `${epic.authLink}`
            }
          ]
        }
      ]
    });

    interaction.deferReply();
    interaction.deleteReply();
  }
};
