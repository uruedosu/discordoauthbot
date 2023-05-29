const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "captcha",
  description: "📨 Captcha Metni Gönderir",
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
        .setLabel("Cevapla")
    );

    interaction.channel.send({
      embeds: [{
        title: "**ℹ️ Nitro Evine Hoş Geldiniz!**",
        description: `
Tüm sunucuya erişmek için lütfen aşağıdaki düğmeye tıklayın ve görüntüde ne gördüğünüzü yanıtlayın (robot olmadığınızı doğrulamak için).
⚠️ Kod 5 harf/rakamdan oluşmaktadır.`,
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
              label: "Cevapla",
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
