const discord = require('discord.js')
const users = require('../../models/users');

module.exports = {
  name: "users",
  description: "👥 Users in bot",
  default_permission: false,
  timeout: 3000,
  category: "whitelist",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {

  const data = await users.find()   

  interaction.reply({ embeds: [new discord.MessageEmbed().setColor('#2F3136').setDescription(`**There Are Currently \`${data.length}\` Users Authorized!**`)] })
  }
}