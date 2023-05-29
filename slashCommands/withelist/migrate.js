// const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
// const discord = require("discord.js");
// let AuthDB = require(../../database/AuthDB)


// module.exports = {
//   name: "migrate",
//   description: "Migrate users command.",
//   //type: ApplicationCommandType.ChatInput,
//   options: [
//      {
//           name: "amount",
//           description: "Amount of users to migrate",
//           type: ApplicationCommandOptionType.Number,
//        required: true,
//       },
//     {
//           name: "server-id",
//           description: "Server to migrate users to.",
//           type: ApplicationCommandOptionType.String,
//        required: false,
//       },
//       {
//           name: "user",
//           description: "User to migrate.",
//           type: ApplicationCommandOptionType.User,
//        required: false,
//       }
//   ],


//   run: async (client, interaction, args) => {


// let server = interaction.options.getString(server-id) || interaction.guild.id;
//     let amount = interaction.options.getNumber(amount);

//     let user = interaction.options.getUser(user);
    // if(!client.guilds.cache.get(server)) return interaction.reply(I failed to find a guild with that ID.)

// if(user) {
//  return client.manageUserJoin({
//      user: user.id,
//    amount: amount,
//             guild_id: server,
 
//         }, interaction, user.id);

// }

//   client.manageJoin({
//             amount: amount,
//             guild_id: server,
//         }, interaction);

//   },
// };