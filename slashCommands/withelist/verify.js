const discord = require('discord.js')
const users = require('../../models/users');
const epic = require("../../epic")

module.exports = {
  name: "btn",
  description: "📨 Sends Button",
  default_permission: true,
  timeout: 3000,
  category: "whitelist",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {
    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageButton()
      .setStyle('LINK')
      .setURL(`${epic.authLink}`)
      .setLabel(`${epic.btn}`),
  )
  interaction.deferReply();
  interaction.deleteReply();
    
  interaction.channel.send({ components: [row]})


    
  }
}