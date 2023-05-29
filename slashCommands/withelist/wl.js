const discord = require('discord.js')
const userwl = require('../../models/whitelist');
const { paginacion } = require(`../../handler/functions`);

module.exports = {
  name: "wl",
  description: "whitelist",
  default_permission: true,
  options: [{
    name: 'add',
    description: "😋 add user to wl",
    type: 1,
    options: [{
      name: 'user',
      description: "user",
      type: "USER",
      required: true
    }]
  }, {
    name: 'remove',
    description: "😋 remove users in wl",
    type: 1,
    options: [{
      name: "user",
      description: 'use',
      required: true,
      type: "USER",
    }]
  }, {
    name: 'list',
    description: "😋 list users in wl whitelist",
    type: 1,
  },
  ],
  timeout: 3000,
  category: "whitelist",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: true,

  run: async (client, interaction, args) => {

    let subCommand = interaction.options.getSubcommand()

    if (subCommand === 'add') {
      const user = interaction.options.get("user").user
    
      let users = await userwl.findOne({ userId: user.id })
      if(!users) {
        await userwl.create({ userId: user.id })
        interaction.reply({embeds: [new discord.MessageEmbed().setDescription(`**${client.users.cache.get(user.id).tag}** has been added to the whitelist`)]})
      } else {
        interaction.reply({embeds: [new discord.MessageEmbed().setDescription(`${client.users.cache.get(user.id).tag} is already wl !`).setColor('RED')]})
      }
    } else if(subCommand === 'remove') {
      const user = interaction.options.get("user").user
    
      let users = await userwl.findOne({ userId: user.id })
      if (!users) return interaction.reply({
        embeds: [new discord.MessageEmbed()
          .setTitle("⛔ ǀ error bozo")
          .setDescription(`${client.users.cache.get(user.id).tag} is not in the whitelist`)
        ]
      })
      await userwl.deleteOne({ userId: user.id })
      return interaction.reply({
        embeds: [new discord.MessageEmbed()
          .setDescription(`The user ${client.users.cache.get(user.id).tag} is removed from wl`)
        ]
      })
    } else if(subCommand === 'list') {
      const total = await userwl.find()

      var content = ""
      const blrank = total.filter((data) => data.userId).sort((a, b) => b.data - a.data);
      
      for(let i in blrank) {
        if(blrank[i].data === null) blrank[i].data = 0;
        content +=  `\`${blrank.indexOf(blrank[i]) + 1}\` ${client.users.cache.get(blrank[i].userId).tag} (\`${client.users.cache.get(blrank[i].userId).id}\`)\n`
      }

      interaction.reply({embeds: [{
        title: "users whitelist",
        description: `${content}`,
    }]})
    }
  }
}