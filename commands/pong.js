module.exports = {
  name: "pong",
  description: "Ping!",
  execute(message, args) {
    console.log(message.member.user.avatarURL());
  }
};
