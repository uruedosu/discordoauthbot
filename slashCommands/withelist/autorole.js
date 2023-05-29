const epic = require("../../epic");
const discord = require('discord.js');

module.exports = {
  name: "autorole",
  description: "Set the roleid and autoaddid values",
  category: "config",
  options: [
    {
      name: "roleid",
      description: "The ID of the role to be assigned",
      type: "STRING",
      required: true
    }
  ],
  run: async (client, interaction, args) => {
    const roleid = interaction.options.getString("roleid");
    const autoaddid = interaction.guildId; // Retrieve the server ID from the interaction object

    // Save the roleid and autoaddid values to the epic object or database
    epic.roleid = roleid;
    epic.autoaddid = autoaddid;

    const role = interaction.guild.roles.resolve(roleid); // Resolve the role from the roleid

    if (role) {
      await interaction.reply({
        content: `The role has been set to <@&${role.id}>`,
        ephemeral: true // Make the reply visible only to the user
      });
    } else {
      await interaction.reply({
        content: `The role with ID ${roleid} could not be found.`,
        ephemeral: true
      });
    }
  },
};
