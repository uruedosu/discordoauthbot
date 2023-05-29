const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "📙 Shows All Commands",
  default_permission: false,
  timeout: 3000,
  category: "whitelist",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(` `)
.setDescription(`> <:persono:1033812226747940985> **oAuth2 Menu**\n\`clean, refresh, joinall, users, leave, wl [add/remove/list]\`\n\n> <:bulbo:1033812230275350608> **Extra Cmds Menu**\n\`btn, links \`\n\n**Default Prefix:** \`/\`\n**After there authorized it brings them to the verified discord page!**`)
    .setColor(`#2F3136`)
      .setFooter({ text: ` `})
    await interaction.reply({embeds: [embed]})
  }
}