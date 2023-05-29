const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "captcha",
  description: "📨 Sends Captcha Text",
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
        .setLabel("Answer")
    );

    interaction.channel.send({
      embeds: [{
        title: "**ℹ️ Welcome to Nitro Home!**",
        description: `
To access the entire server, please click the button and answer what you see in the image below (to verify that you're not a robot).
⚠️ The code consists of 5 letters/numbers.`,
        color: 1,
        image: {
          url: "https://www.learningsuccessblog.com/files/0aainput-black.gif"
        }
      }],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: "Answer",
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
