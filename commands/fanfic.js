let file2= '/Code/Bot/jsons/fanfic.json';
let data2=require(file2);
module.exports = {
	name: 'fanfic',
	description: 'Spit out a fanfic!',
	execute(message, args) {
		let rng= Math.floor(Math.random()*data2.fanfic.length)
        message.channel.send(`${data2.fanfic[rng].text}`)
	},
};