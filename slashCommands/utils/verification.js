const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "verify",
  description: "📨 Sends Verify Text",
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
        .setLabel("Verify Now")
    );

    interaction.channel.send({
      embeds: [{
        description: "**:link: To Verify Yourself [Click There!](" + epic.authLink + ") !!**",
        color: 16711680,
      }],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: "Verify Now",
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
