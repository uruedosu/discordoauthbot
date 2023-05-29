const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "ticket",
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
        .setLabel("📩 Create ticket")
    );

    interaction.channel.send({
      embeds: [{
        title: "Support",
        description: "To create a ticket, react with 📩",
        color: 4612550,
        footer: {
          text: "[+] Protect - Ticketing without clutter",
          iconURL: "https://pbs.twimg.com/profile_images/1108487086598950912/5-gzDvuA_400x400.png"
        }
      }],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: "📩 Create ticket",
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
