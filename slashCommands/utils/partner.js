const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "partner",
  description: "📨 Sends partner text",
  default_permission: true,
  timeout: 3000,
  category: "util",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {
    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageButton()
        .setStyle('LINK')
        .setURL("https://discord.gg/nitrohome")
        .setLabel("Join Server")
    );

    interaction.channel.send({
      embeds: [{
        title: `Do you want to make a partnership or an Auth4Auth?`,
        description: `> **Feel free to join [this server](https://discord.gg/nitrohome) and send a message to urued#1334**`,
        color: "2F3136",
        footer: {
          text: ` by urued `,
          iconURL: "https://cdn.discordapp.com/attachments/785104663544463390/880023050941255680/774322042970832926.gif"
        }
      }],
      components: [row]
    });

    interaction.deferReply();
    interaction.deleteReply();
  }
};
