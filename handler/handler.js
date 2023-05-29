// handler.js

function loadEvents(client) {
  // Etkinlikleri yükleme işlemleri burada gerçekleştirilir
  // Örnek olarak 'ready' etkinliğini burada yükleyelim
  client.on('ready', () => {
    console.log('Bot is ready!');
  });
}

function loadSlashCommands(client) {
  // Slash komutlarını yükleme işlemleri burada gerçekleştirilir
  // Örnek olarak 'ping' isimli bir slash komutunu burada yükleyelim
  const data = {
    name: 'ping',
    description: 'Pong!',
  };

  const execute = async (interaction) => {
    await interaction.reply('Pong!');
  };

  client.slash.set(data.name, { data, execute });
}

module.exports = {
  loadEvents,
  loadSlashCommands,
};
