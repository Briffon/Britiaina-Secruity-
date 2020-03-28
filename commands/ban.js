module.exports = {
  name: "ban",
  description: "Ban user!",
  execute(message, args) {
    if (message.member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS"])) {
      let mem = message.mentions.members.first();
      if (mem != undefined) {
        mem.ban().then(mem => {
          message.channel.send(
            ":wave: " + mem.displayName + " has been gunned down"
          );
        });
      } else {
        message.channel.send("Member does not exist");
      }
    } else {
      message.channel.send("Sorry, you're too beta for this command.");
    }
  }
};
