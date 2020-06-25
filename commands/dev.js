module.exports = {
    name: 'dev',
    description: 'Muestra información de utilidad para desarrolladores del bot.\r\n\r\n**Argumentos:** *(informacion solicitada)* \r\n   - tutorial : *información inicial sobre el bot y framework*\r\n   - discord : *información sobre cómo utilizar Discord*\r\n   - tutor : *lista de tutores y forma de solicitar ayuda*\r\n   - admin : *solucion de dudas y problemas no académicos*\r\n   - chat : *información sobre los canales de texto*\r\n   - audio : *información sobre los canales de auido*\r\n   - audio+ : *solución a problemas de audio*\r\n   - radio : *utilización del radio (reproductor de música)*\r\n   - juegos : *información sobre las salas de juegos* \r\n\r\n*Por ejemplo* `$ayuda tutor` *resultará en un recuadro con información sobre los tutores*',
  args: true,

    execute(message, args) {
  		if (args[0] === 'ayuda') {

        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#44bcd8')
	.setTitle('¡Esta es la información que solicitaste! :bulb:')
  .setAuthor('Página oficial de DiscordJs (Click Aquí)', 'https://discord.js.org/static/logo-square.png', 'https://discord.js.org')
	.setDescription('Este bot es un programa realizado con javascript y discordjs. Discordjs es una librería de node.js que le permite a este programa conectarse con la API de Discord. Visita la página oficial del proyecto para más información. Utiliza los siguientes comandos para obtener más información:')
  .addFields(
    { name: ':grey_question: Comanandos para desarrolladores:', value: '`$dev ayuda`, `$dev tutorial`, `$dev framework`, `$dev command`, `$dev git`,  `$dev push`, `$dev pull`, `$dev request`, `$dev ver`, `$ayuda juegos` ', inline: true },

  )
	.setThumbnail('https://i.imgur.com/2UMkL5N.png')
	.setTimestamp()
	.setFooter('*Recuerda visitar la página oficial de discordjs: https://discord.js.org. Utiliza $dev tutorial para saber cómo puedes colaborar con el desarrollo de este bot.*');

  return message.channel.send(exampleEmbed);
  channel.send(exampleEmbed);

    		}

        if (args[0] === 'tutorial') {

          const Discord = require('discord.js');
          const exampleEmbed = new Discord.MessageEmbed()
  	.setColor('#44bcd8')
  	.setTitle('¡Aquí están las recomendaciones! :bulb:')
  	.setDescription('¡Se puede colaborar con el desarrollo del bot de muchas maneras! \r\n\r\n**Para programadores:** Necesitarás conocimientos generales de lógica de programación y también es recomendable que si no estás familiarizado con javascript consultes algún video tutorial de sintaxis básica de este lenguaje. Para comenzar a colaborar desarrollando código utiliza el comando `$dev framework`. \r\n\r\n**Para usuarios:** Si no estás familiarizado o no te interesa la programación igual puedes colaborar con el desarrollo de este bot a través de redactar texto para comandos, ideas de funciones, diagramas de flujo, etc. Si nunca haz programado pero te interesa aprender, este proyecto es un excelente lugar para iniciar ya que se trata de un lenguaje de programación fácil de entender y utilizar.')
    .addFields(
      { name: ':grey_question: Documentación y tutoriales para desarrolladores:', value: ' Documentación oficial de Discordjs `https://discordjs.guide/`, Videotutorial "Bot de Discord con Discordjs de 0 a 100" `https://youtu.be/EUB777JJT5E`, Videotutorial "Javascript para principiantes" `https://youtu.be/RqQ1d1qEWlE`', inline: true },

    )
    .setThumbnail('https://i.imgur.com/2UMkL5N.png')
  	.setTimestamp()
  	.setFooter('*¡Nunca es tarde para aprender algo nuevo y nunca sobran las manos en este proyecto!*');

    return message.channel.send(exampleEmbed);
    channel.send(exampleEmbed);

      		}


    	},

  };
