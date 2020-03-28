let file = "/Code/Bot/jsons/stats.json";
let data = require(file);
let file2 = "/Code/Bot/jsons/battle.json";
let data2 = require(file2);
const Discord = require("discord.js");
const moment = require("moment");
module.exports = {
  name: "stats",
  description: "User Stats",
  execute(message, args) {
    let user;
    user = message.author;
    const member = message.guild.member(user);
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(user.avatarURL())
      .setTitle(`${user.username}#${user.discriminator}`)
      .addField(
        "Nickname:",
        `${member.nickname !== null ? `${member.nickname}` : "None"}`,
        true
      )
      .addField(
        "JoinedAt:",
        `${moment.utc(member.joinedAt).format("dddd,MMMM Do YYYY,HH:mm:ss")}`,
        true
      )
      .addField(
        "CreatedAt:",
        `${moment
          .utc(message.author.createdAt)
          .format("dddd,MMMM Do YYYY,HH:mm:ss")}`,
        true
      )
      .addField(
        "Roles:",
        member.roles.cache.map(roles => `${roles.name}`).join(","),
        true
      );
    for (let i = 0; i < data.stats.length; i++) {
      if (user.username == data.stats[i].user) {
        embed.addField("Messages Sent:", `${data.stats[i].messages}`, true);
      }
    }

    // console.log("bot name:" +message.member.displayName)
    for (let i = 0; i < data2.battles.length; i++) {
      // console.log("json name:"+data2.battles[i].user)
      if (message.member.displayName == data2.battles[i].user) {
        embed.addField("Battles Won:", `${data2.battles[i].wins}`, true);
        console.log("whew");
      }
    }
    message.channel.send({ embed });
  }
};
