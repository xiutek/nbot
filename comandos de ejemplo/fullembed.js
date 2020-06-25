module.exports = {
    name: 'fullembed',
    description: 'Muestra información de ayuda del servidor.\r\nArgumentos: (informacion solicitada). \r\n*Por ejemplo* `$ayuda tutor` *resultará en un recuadro con información sobre los tutores*',
  args: true,

    execute(message, args) {
  		if (args[0] === 'foo') {

        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('#bot')
	.setAuthor('Some name', 'https://i.imgur.com/nFao1cI.jpeg', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

  return message.channel.send(exampleEmbed);
  channel.send(exampleEmbed);

    		}
        else if (args[0] === 'fu') {

          return message.channel.send('bur');
      		}

    		message.channel.send(`Completado`);
    	},

  };
