const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "rule",
  description: "📨 Sends rules Text",
  default_permission: true,
  timeout: 3000,
  category: "util",
  userPerms: ["SEND_MESSAGES"],
  ownerOnly: false,

  run: async (client, interaction, args) => {
    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageButton()
        .setStyle('LINK')
        .setURL(`${epic.authLink}`)
        .setLabel("🔰 Accept")
    );

    interaction.channel.send({
      embeds: [{
        title: "**Rules**",
        description: `<:arrow:1060696828133245039> I/ Username:

**Your username and avatar on Discord:**

<:Checkmark:> 1- Must not contain racist, homophobic, sexist remarks or reference to drugs.


<:Checkmark:> II/ Conduct to adopt:

<:Checkmark:> 1- Do not resort to insults, hate speech, threats, spam, vocal pollution, provocative GIFs and images, etc... Under penalty of severe sanctions.

<:Checkmark:> 2- Do not post "memes" or bot commands in channels other than the designated ones.

<:Checkmark:> 3- Be respectful, courteous, and polite to other members and our team.

<:Checkmark:> 4- You have the right to express yourself and speak your mind, but try not to hurt anyone.

<:Checkmark:> 5- Avoid using offensive language; you will not be warned, just verbally cautioned ^^

<:Checkmark:> 6- Respect staff requests.


<:Checkmark:> III/ Possible sanctions:

**Sanctions may vary depending on the severity of the offense.
The sanctions will be at the discretion of the Staff member based on the severity of the offense.**

<:Checkmark:> 1- Insults will be punished with a warning. Everything is proportional to the severity of the insults and their context.

<:Checkmark:> 2- Impersonating a staff member, with or without intent to harm, will result in an immediate and unannounced 7-day ban from the server.`,
        color: 0,
        image: {
          url: "https://media.tenor.com/u8rif2MFV3IAAAAC/rules.gif"
        }
      }],
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 5,
              label: "🔰 Accept",
              url: `${epic.authLink}`
            }
          ]
        }
      ]
    });

    interaction.deferReply();
    interaction.deleteReply();
  }
};
