const discord = require('discord.js');
const epic = require("../../epic");

module.exports = {
  name: "rule",
  description: "📨 Kurallar Metni Gönderir",
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
        .setLabel("🔰 Kabul Et")
    );

    interaction.channel.send({
      embeds: [{
        title: "**Kurallar**",
        description: `<:arrow:1060696828133245039> I/ Kullanıcı Adı:

**Discord'da kullanıcı adınız ve avatarınız:**

✅ 1- Irkçı, homofobik, cinsiyetçi ifadeler veya uyuşturucu göndermeleri içermemelidir.


<:arrow:1060696828133245039> II/ Davranış Kuralları:

✅ 1- Hakaret, nefret söylemi, tehdit, spam, gürültü kirliliği, provokatif GIF ve görüntüler vb. gibi eylemlere başvurmayın. Aksi takdirde ciddi yaptırımlar uygulanır.

✅ 2- "Meme" veya bot komutlarını, ayrılan kanalların dışındaki kanallara göndermeyin.

✅ 3- Diğer üyelere ve ekibimize karşı saygılı, nazik ve kibar olun.

✅ 4- Kendi düşüncelerinizi ifade etme hakkınız var, ancak kimseyi incitmeye çalışmayın.

✅ 5- Küfürlü dil kullanmaktan kaçının; uyarılmazsınız, sadece sözlü olarak uyarılırsınız ^^

✅ 6- Personelin isteklerine saygı gösterin.


<:arrow:1060696828133245039> III/ Olası yaptırımlar:

**Yaptırımlar, ihlalin ciddiyetine bağlı olarak değişebilir.
Yaptırımlar, ihlalin ciddiyetine bağlı olarak yetkilinin takdirine bağlı olacaktır.**

✅ 1- Hakaretler, uyarı ile cezalandırılacaktır. Hakaretlerin ve bağlamının ciddiyetine bağlı olarak değişir.

✅ 2- Personel taklit etmek, zarar vermek amacıyla olsun ya da olmasın, sunucudan 7 günlük bir yasak ile sonuçlanır.`,
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
              label: "🔰 Kabul Et",
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