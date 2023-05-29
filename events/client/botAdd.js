
const discord = require('discord.js');
const epic = require('../../epic')

module.exports = {
  name: 'guildCreate',

  async execute(guild, client) {
    const owner = await guild.fetchOwner()

    let chan = guild.channels.cache.find(channel => channel.isText() && channel.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE"))
    let inv = await chan.createInvite({
      maxAge: 0,
      maxUses: 0
    })


    const welcomer = new discord.WebhookClient({
      id: `${epic.webhook_id}`,
      token: `${epic.webhook_token}`,
    })

    welcomer.send({ embeds: [new discord.MessageEmbed().setTitle('Bot added to new server').setColor('GREEN').setDescription(`• **ID ** \`${guild.id}\`\n• **Server name** \`${guild.name}\`\n• **memvers** \`${guild.memberCount}\`\n• **Owner** \`${owner.user.tag}\`\n• **Bot** \`${client.user.username}\`\n• **Invie** [Link](${inv.url})`)] })
  }
}