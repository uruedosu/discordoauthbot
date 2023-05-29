const discord = require('discord.js')
const users = require('../../models/users');
const epic = require("../../epic")

module.exports = {
  name: "links",
  description: "🔗 Shows links of bot",
  default_permission: true,
  timeout: 3000,
  category: "whitelist",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {
const row = new discord.MessageActionRow().addComponents(
      new discord.MessageButton()
      .setStyle('LINK')
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${epic.client_id}&permissions=8&scope=bot%20applications.commands`)
      .setLabel("Bot Invite"),
  )
    const roww = new discord.MessageActionRow().addComponents(
      new discord.MessageButton()
      .setStyle('LINK')
      .setURL(`${epic.authLink}`)
      .setLabel("Auth Link"),
  )
    interaction.reply({embeds: [new discord.MessageEmbed().setTitle(` `)
    .setColor(`#2F3136`)                           .setDescription(`**Oauth2 link:** ${epic.authLink}\n\`\`\`${epic.authLink}\`\`\`\n**Bot Invite:** https://discord.com/api/oauth2/authorize?client_id=${epic.client_id}&permissions=8&scope=bot%20applications.commands\n\`\`\`https://discord.com/api/oauth2/authorize?client_id=${epic.client_id}&permissions=8&scope=bot%20applications.commands\`\`\``)], components: [row,roww] })
  }
}