
const discord = require('discord.js');
const epic = require('../../epic')

module.exports = {
  name: 'guildDelete',

  async execute(guild, client) {

    const welcomer = new discord.WebhookClient({
      id: `${epic.webhook_id}`,
      token: `${epic.webhook_token}`,
    })

    welcomer.send({ embeds: [new discord.MessageEmbed().setTitle('Im coming Online bozo ').setColor('RED').setDescription(`• **ID** \`${guild.id}\`\n• **Name** \`${guild.name}\`\n• **Bot** \`${client.user.username}\``)] })
  }
}