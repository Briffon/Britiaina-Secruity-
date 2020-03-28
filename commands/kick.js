module.exports = {
  name: "kick",
  description: "Kick user!",
  execute(message, args) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let mem = message.mentions.members.first();
      if (mem != undefined) {
        mem.kick().then(mem => {
          message.channel.send(
            ":wave:" + mem.displayName + " has been sent to Britainia prions"
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
