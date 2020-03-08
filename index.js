const fs = require('fs');
const Discord= require('discord.js');
// let file= '/Code/Bot/jsons/stats.json';
// let data= require(file);
const {prefix,token,giphyToken}=require('./config.json');
const client= new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

function catchErr(err,message){
    client.users.get("172843767408230400").send(`There was an error at ${message.channel} at guild ${message.guild}`);
    client.users.get("172843767408230400").send("Error ```"+err+"```");
}

//message command
client.on('message',message =>{
 if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
 //commands
    try {
        client.commands.get(command).execute(message, args,client);
    } catch (error) {
        catchErr(error,message);
        message.reply('there was an error trying to execute that command!');
    }


})

//user join
client.on('guildMemberAdd',member=>{
    member.guild.channels.get('560304241693032522').send(`Welcome ${member} to the great nation of Britainia!`);
})


//start the bot
client.once('ready', () => {
	console.log('Ready!');
});
client.login(token);