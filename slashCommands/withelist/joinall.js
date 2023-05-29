const discord = require('discord.js');
const users = require('../../models/users');

module.exports = {
  name: "joinall",
  description: "🏃 Veritabanındaki tüm kullanıcıları sunucuya katılıyor",
  default_permission: true,
  timeout: 3000,
  category: "whitelist",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {
    const data = await users.find();
    let error = 0;
    let success = 0;
    let alreadyJoined = 0;

    await interaction.reply(`**Kullanıcılar katılıyor...** \`0\`/\`${data.length}\``);
    const inter = setInterval(async () => {
      interaction.editReply(`**Kullanıcılar Katılıyor...** \`${success}\`/\`${data.length}\``);
    }, 1000);

    for (const i of data) {
      const user = await client.users.fetch(i.userId).catch(() => {});
      if (interaction.guild.members.cache.get(i.userId)) {
        alreadyJoined++;
      } else {
        await interaction.guild.members.add(user, { accessToken: i.accessToken }).catch(() => {
          error++;
        });
        success++;
      }
    }

    clearInterval(inter);
    await interaction.editReply({
      embeds: [{
        title: `${client.user.username} > Joinall`,
        description: `**Sunucuda Zaten Bulunan Üyeler**: ${alreadyJoined}\n**Başarılı**: ${success}\n**Hata**: ${error}`,
        color: "2F3136"
      }]
    });
  }
};
