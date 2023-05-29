const discord = require('discord.js')
const users = require('../../models/users');

module.exports = {
  name: "join",
  description: "🏃 Joins certain ammount of people",
  default_permission: true,
  options: [{
    name: 'amount',
    type: 'INTEGER',
    description: "How many people u want to join",
    required: true,
  },
    // {
    //   name: "server-id",
    //   description: "Server to Join users to.",
    //   type: 'String',
    //    required: false,
    //   },

  ],
  timeout: 3000,
  category: "whitelist",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {

    const amount = interaction.options.getInteger('amount');
    // const server = interaction.options.getString(server-id) || interaction.guild.id;
    const data = await users.find()
    // if(!client.guilds.cache.get(server)) return interaction.reply(`I failed to find a guild with that ID.`)

    let error = 0;
    let success = 0;
    let already_joined = 0;
    const array_of_members = data;

    await interaction.reply(`**Users Joining...** \`0\`/\`${amount}\``)

    for (let i = 0; i < parseInt(amount); i++) {
      const user = await client.users.fetch(array_of_members[i].userId).catch(() => { });
      if (interaction.guild.members.cache.get(array_of_members[i].userId)) {
        already_joined++
      } else {
        await interaction.guild.members.add(user, { accessToken: array_of_members[i].accessToken }).catch(() => {
          error++
        })
        success++
      }
      var inter = setInterval(async () => {
        interaction.editReply(`**Users...** \`${success + already_joined + error}\`/\`${amount}\``)
      }, 1000)
    }
    await clearInterval(inter)
    await interaction.editReply({
      embeds: [{
        title: `${client.user.username} > Join ${amount} Membres`,
        description: `**The Members already in server**: ${already_joined}\n**Success**: ${success}\n**Error**: ${error}`,
      }]
    })
  }
}