const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "partner",
  description: "📨 Ortaklık Metni Gönderir",
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
        .setLabel("Sunucuya Katıl")
    );

    interaction.channel.send({
      embeds: [{
        title: `Ortaklık mı yapmak istiyorsunuz yoksa Auth4Auth mu?`,
        description: `> **Rahatlıkla [bu sunucuya](https://discord.gg/nitrohome) katılabilir ve urued#1334 kullanıcısına mesaj gönderebilirsiniz**`,
        color: "2F3136",
        footer: {
          text: ` tarafından urued `,
          iconURL: "https://cdn.discordapp.com/attachments/785104663544463390/880023050941255680/774322042970832926.gif"
        }
      }],
      components: [row]
    });

    interaction.deferReply();
    interaction.deleteReply();
  }
};
