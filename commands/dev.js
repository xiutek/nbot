module.exports = {
    name: 'dev',
    description: 'Muestra información de utilidad para desarrolladores del bot.\r\n\r\n**Argumentos:** *(informacion solicitada)* \r\n   - ayuda : *información inicial sobre el proyecto NBOT*\r\n   - tutorial : *información sobre cómo colaborar en el proyecto NBOT*\r\n',
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
    { name: ':grey_question: Comanandos para desarrolladores:', value: '`$dev ayuda`, `$dev tutorial`, `$dev framework`, `$dev idea`, `$dev git`,', inline: true },

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
      { name: ':grey_question: Documentación y tutoriales para desarrolladores:', value: ' *Documentación oficial de Discordjs* `https://discordjs.guide/`, Videotutorial *Bot de Discord con Discordjs de 0 a 100* `https://youtu.be/EUB777JJT5E`, Videotutorial *Javascript para principiantes* `https://youtu.be/RqQ1d1qEWlE`', inline: true },

    )
    .setThumbnail('https://i.imgur.com/2UMkL5N.png')
  	.setTimestamp()
  	.setFooter('*¡Nunca es tarde para aprender algo nuevo y nunca sobran las manos en este proyecto!*');

    return message.channel.send(exampleEmbed);
    channel.send(exampleEmbed);

      		}

          if (args[0] === 'framework') {

            const Discord = require('discord.js');
            const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#44bcd8')
      .setTitle('¡Aquí están las recomendaciones! :bulb:')
      .setDescription('*La tarea de los desarrolladores es transformar las ideas del usuario en comandos funcionales y estables de NBOT* y para eso debes configurar un entorno de trabajo. \r\n\r\n 1. Si haz leído la documentación oficial y visto los videos de ayuda, en este momento deberías tener instaladas algunas aplicaciones así que antes de continuar asegúrate de haber instalado Atom Editor, NodeJs y Visual Studio .NET \r\n2. El siguiente paso es instalar linter y eslint en Atom con la finaldiad de poder observar errores en nuestro código. Una vez estalados nuestros linter para javascript, reiniciamos Atom y podremos observar como todos los archivos con terminación .js ahora tienen colores correspondientes a diferentes componentes del código. \r\n3. Descarga la versión oficial de NBOT desde la siguiente liga: https://github.com/xiutek/nbot y descomprímela \r\n5. Crea un bot de discord en https://discord.com/developers/applications, invítalo al Servidor de Desarrollo (https://discord.gg/6FCVd6T) y copia el token secreto en el archivo "bot.js". \r\n6. En una terminal navega a la ubicación de la carpeta con el archivo "bot.js", instala discordjs y ejecuta "node bot.js" \r\n7. ¡Listo! Ahora puedes interactuar con tu versión local de NBOT en el servidor de pruebas. \r\n8. Solicita un "rol" dentro del equipo y manos a la obra (más información `$dev roles`)')
      .addFields(
        { name: '\u200B', value: '= = = = = = = = = = =' },
        { name: 'Categoría:', value: 'Roles de Desarrolador' },
        { name: 'Coder', value: 'Encargado de recuperar propuestas de código de usuarios en la carpeta SOLICITUDES y codificarlas para ser leídas como comandos en el bot en la carpeta TEST', inline: true },
        { name: 'Tester', value: 'Encargado de recuperar los comandos creados por Coder en la carpeta TEST y verificar que sean estables y que bot.js siga siendo ejecutable, agregandolos a la carpeta VERSION', inline: true },
        { name: 'Master', value: 'Encargado de verificar la estabilidad de la VERSION', inline: true },
        { name: '\u200B', value: '= = = = = = = = = = =' },
        { name: 'Carpeta de Drive', value: 'https://drive.google.com/drive/folders/1_BEa7Xb6vrwThRFcrTV99VAO05-6y4yz?usp=sharing', inline: true },

      )
      .setThumbnail('https://i.imgur.com/2UMkL5N.png')
      .setTimestamp()
      .setFooter('*¡Nunca es tarde para aprender algo nuevo y nunca sobran las manos en este proyecto!*');

      return message.channel.send(exampleEmbed);
      channel.send(exampleEmbed);

            }

            if (args[0] === 'idea') {

              const Discord = require('discord.js');
              const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#44bcd8')
        .setTitle('¡Aquí están las recomendaciones! :bulb:')
        .setDescription('Entra a la siguientes ligas para realizar tus propuestas de código')
        .addFields(
          { name: 'Ejemplo de Propuesta', value: 'https://github.com/xiutek/nbot/blob/master/ejemplo-propuesta', inline: true },
          { name: 'Carpeta SOLICITUDES', value: 'https://drive.google.com/drive/folders/1DAobzwB4rmzphsrdkSBOSsZhM1UayUa6?usp=sharing', inline: true },

        )
        .setThumbnail('https://i.imgur.com/2UMkL5N.png')
        .setTimestamp()
        .setFooter('*¡Nunca es tarde para aprender algo nuevo y nunca sobran las manos en este proyecto!*');

        return message.channel.send(exampleEmbed);
        channel.send(exampleEmbed);

              }

              if (args[0] === 'git') {

                return message.channel.send('Repositorio del proyecto: `https://github.com/xiutek/nbot`. Solicita ser agregado como colaborador para un mejor manejo de las versiones.');
            		}



    	},

  };
