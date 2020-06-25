module.exports = {
    name: 'ayuda',
    description: 'Muestra información de ayuda del servidor.\r\n\r\n**Argumentos:** *(informacion solicitada)* \r\n   - tutorial : *información inicial sobre el bot y los comandos*\r\n   - discord : *información sobre cómo utilizar Discord*\r\n   - tutor : *lista de tutores y forma de solicitar ayuda*\r\n   - admin : *solucion de dudas y problemas no académicos*\r\n   - chat : *información sobre los canales de texto*\r\n   - audio : *información sobre los canales de auido*\r\n   - audio+ : *solución a problemas de audio*\r\n   - radio : *utilización del radio (reproductor de música)*\r\n   - juegos : *información sobre las salas de juegos* \r\n\r\n*Por ejemplo* `$ayuda tutor` *resultará en un recuadro con información sobre los tutores*',
  args: true,

    execute(message, args) {
  		if (args[0] === 'tutorial') {

        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#5b34eb')
	.setTitle('¡Esta es la información que solicitaste! :bulb:')
	.setDescription('Soy un robot :robot: que está constantemente atento a *comandos*. \r\n \r\nUn *comando* es una mensaje especial que puedes escribir en cualquier chat de texto.\r\nPara escribir un comando, inicia escrbiendo el símbolo `$` seguido de un `comando`.\r\nEnvía tu comando como mensaje al canal y si el comando existe, lo ejecutaré. :gear: \r\n \r\nPara ver todos los comandos disponibles, utiliza `$help`. Puedes utilizar el comando `$help` seguido de un comando para saber cómo utilizarlo, por ejemplo `$help ayuda` monstrará información sobre el comando ayuda. ')
  .addFields(
    { name: ':grey_question: Comanandos de ayuda', value: '`$help`, `$help ayuda`, `$ayuda tutorial`, `$ayuda discord`, `$ayuda tutor`, `$ayuda admin`,  `$ayuda chat`, `$ayuda auido`, `$ayuda audio+`, `$ayuda radio`, `$ayuda juegos` ', inline: true },

  )
	.setThumbnail('https://i.imgur.com/nFao1cI.jpeg')
	.setTimestamp()
	.setFooter('*Felicidades. El primer paso siempre es aceptar que uno necesita ayuda.*');

  return message.channel.send(exampleEmbed);
  channel.send(exampleEmbed);

    		}

        if (args[0] === 'discord') {

          const Discord = require('discord.js');
          const exampleEmbed = new Discord.MessageEmbed()
  	.setColor('#5b34eb')
  	.setTitle('¡Aquí están las recomendaciones! :bulb:')
  	.setDescription(':one:  Puedes silenciar canales y categorías de los cuales no te interese recibir notificaciones dando click derecho en la lista de la izquierda, de la misma forma puedes volver a activar las notificaciones.  :zzz: \r\n :two: Puedes buscar mensajes, usuarios, canales, personas con el ícono de la lupa. :mag_right:  \r\n :three: Puedes ver mensajes marcados cómo relevantes por los tutores y administradores con el ícono de la tachuela. :pushpin:  \r\n :four: Utiliza el #chat-principal para compartir contenido relevante y de interés general a toda la comunidad de Prepaenlinea.mx :star: \r\n :five: Localiza los canales de las materias que estés cursando actualmente y mantente al pendiente de las notificaciones en el canal de #avisos .  :pencil: \r\n :six: Localiza los canales sociales donde podrás encontrar foros etiquetados por intereses, actividades y juegos de la comunidad.  :crossed_swords:  \r\n :seven: Participa mucho y en todo momento observa el #reglamento del servidor.  :crown:  \r\n')
  	.setThumbnail('https://i.imgur.com/nFao1cI.jpeg')
  	.setTimestamp()
  	.setFooter('*¡Ahora ya sabes utilizar Discord! Recuerda la regla de oro: ser buena onda.*');

    return message.channel.send(exampleEmbed);
    channel.send(exampleEmbed);

      		}

          if (args[0] === 'tutor') {

            const Discord = require('discord.js');
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#5b34eb')
          	.setTitle('¡Aquí está la información de los tutores! :bulb:')
          	.setThumbnail('https://i.imgur.com/nFao1cI.jpeg')
          	.addFields(
              { name: ':abacus: Ciencias Exactas', value: '@Daniela.Caloca#6573', inline: true },
          		{ name: ':computer: Informática', value: '@Victor_Ugalde#4353', inline: true },
              { name: ':test_tube: Ciencias Experimentales', value: '@Adán#1160', inline: true },
              { name: ':books: Humanidades y Literatura', value: '@Eduardo Rosales#021', inline: true },
              { name: ':speech_balloon: Idiomas', value: '@Pedro Franco#3905', inline: true },
              { name: 'camera_with_flash: Fotografía', value: '@Javier C#7270', inline: true },
              { name: ':straight_ruler: Autocad', value: '@Alma Carrasco#7183', inline: true },
              { name: ':art: Photoshop / Illustrator:', value: '@alesosa#0990', inline: true },
              { name: ':musical_note: Música / Producción', value: '@Xiucoatl#1329 , @Xiutek#4671', inline: true },
              { name: ':tools: Control Escolar', value: '@Alida#3470', inline: true },
          	)
            .setDescription(':loudspeaker: **__NOTA IMPORTANTE:__** \r\n \r\n La manera de solicitar ayuda deberá estar redactada en **un solo mensaje**. Esto, con el propósito de tener una organización simple y evitar que se acumulen mensajes dispersos en el chat. \r\n De esta manera podremos brindar una mejor atención a sus solicitudes. \r\n En la solicitud, el estudiante deberá especificar su *nombre completo, actividad o evaluación, problema y/o duda, y __toda la justificación__ que crea pertinente.* \r\n Recuerda que, al solicitar ayuda en el chat, queda **prohibido **redactar ningún comentario que sugiera o implique la respuesta a cualquiera de los ejercicios de los módulos, ni capturas de pantalla. __De así serlo, el mensaje será eliminado de inmediato.__\r\n En caso de reincidencia, el estudiante __será dado de **baja del servidor**__.\r\n De ser *imprescindible* compartir su respuesta, el estudiante deberá hacerlo a través del *correo institucional*. Asimismo, *deberá generar la solicitud en el chat* con la finalidad de notificar al tutor sobre el envío del correo.')
          	.setTimestamp()
          	.setFooter('*¡Los tutores resolveran todas tus dudas académicas en los #canales de texto de las materias!*');

            return message.channel.send(exampleEmbed);

        		}

            if (args[0] === 'chat') {

              const Discord = require('discord.js');
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#5b34eb')
            	.setTitle('¡Aquí está la información de los canales de texto! :speech_balloon: ')
            	.setThumbnail('https://i.imgur.com/nFao1cI.jpeg')
            	.addFields(
                { name: '\u200B', value: '= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =' },
                { name: 'Categoría:', value: 'Salas de Texto Oficiales :loudspeaker: ' },
                { name: ':rotating_light: ¡Revisa estos canales antes de iniciar!', value: '`#avisos`, `#reglamento`, `#chat-princial`, `#control-escolar`.', inline: true },
                { name: '\u200B', value: '= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =' },
                { name: 'Categoría:', value: 'Salas de Texto Sociales :star: ' },
                { name: ':pencil: Clubs de Discusión', value: '`#club-de-ciencias`, `#club-de-artes`, `#club-de-lectura`, `#club-de-idimoas`, `#taller-de-escritura`.', inline: true },
                { name: ':video_game: Salas de Jugos', value: '`#club-de-ciencias`, `#club-de-artes`, `#club-de-lectura`, `#club-de-idimoas`, `#taller-de-escritura`.', inline: true },
                { name: '\u200B', value: '= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =' },
                { name: 'Categoría:', value: 'Salas de Texto Académicas :book: ' },
                { name: ':one: Primero', value: '`#español-i`, `#mate-i`, `#ética`, `#informática`, `#geografia`.', inline: true },
            		{ name: ':two: Segundo', value: '`#español-ii`, `#mate-ii`, `#ecología`, `#literatura`, `#biología`.', inline: true },
                { name: ':three: Tercero', value: '`#mate-iii`, `#ciencias-sociales`, `#historia-moderna`, `#salud`, `#química`.', inline: true },
                { name: ':four: Cuarto', value: '`#mate-iv`, `#física`, `#economía`, `#negocios`, `#administración`.', inline: true },
                { name: ':flag_br:  Português', value: '`#comunicação`, `#tecnologia-da-informação`, `#matemática-financeira`, `#álgebra-básica`.', inline: true },
                { name: ':flag_us: English Learning', value: '`#basic-english`, `#intermediate-english`, `#language-arts-i`, `#language-arts-iii`, `#literature`.', inline: true },
                { name: ':flag_us: English Subjects', value: '`#math-i, ii, iii`, `#information-tech`, `#business-management`, `#economics`, `#geography`, `#environmental-st`, `#social-sciences`, `#modern-history`, `#ethics`', inline: true },
                { name: ':art: Extracurriculares I', value: '`#java`, `#photoshop`, `#ilustrator`, `#autocad`, `#fotografía`, `#producción sonora`, `#moda`, `#música`.', inline: true },
                { name: ':books: Extracurriculares II', value: '`#estrategias-de-búsqueda`, `#fisiología`, `#química-orgnánica`, `#socioeconomía`, `#historia-méxico`, `#arte-latinoamérica`, `#historia-latinoamérica`, `filosofía`.', inline: true },


            	)
              .setDescription('Cada chat corresponde a una materia o a un espacio de contenido específico, como el chat de club-de-ciencias, club-de-lectura etc. Identifica las **materias** que estás cursando y revisa las opciones **extracurriculares**. Eres libre de entrar a los canales de chat de las extracurriculares aun si no te has inscrito en ellas.')
            	.setTimestamp()
            	.setFooter('*¡Los tutores resolveran todas tus dudas académicas en los #canales de texto académicos y podrás chatear con tus compañeros en los canales sociales!*');

              return message.channel.send(exampleEmbed);

            }

            if (args[0] === 'audio') {

              const Discord = require('discord.js');
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#5b34eb')
            	.setTitle('¡Aquí está la información de los canales de audio! :speaker:')
            	.setThumbnail('https://i.imgur.com/nFao1cI.jpeg')
            	.addFields(
                { name: '\u200B', value: '= = = = = = = = = = =' },
                { name: 'Categoría:', value: 'Salas de Auido Sociales :star: ' },
                { name: 'Sala:', value: ':speaker:`CLUB SOCIAL SALA 1`\r\n :speaker:`CLUB SOCIAL SALA 2`\r\n :speaker:`SALA DE JUEGOS 1`\r\n :speaker:`SALA DE JUEGOS 2`', inline: true },
                { name: '\u200B', value: '= = = = = = = = = = =' },
                { name: 'Categoría:', value: 'Salas de Audio Académicas :book: ' },
                { name: 'Salas', value: ':speaker:`AULA 1`\r\n :speaker:`AULA 2`\r\n :speaker:`AULA 3`\r\n :speaker:`AULA 4`\r\n', inline: true },
                { name: 'Salas', value: ':speaker:`AULA 5`\r\n :speaker:`AULA 6`\r\n :speaker:`AULA 7`\r\n :speaker:`AULA 8`\r\n :speaker:`AULA 9`\r\n ', inline: true },
                { name: '\u200B', value: '= = = = = = = = = = =' },

            	)
              .setDescription('Cada bloque de materias tiene su propia AULA. Éstas sirven para interactuar en tiempo real con audio o videollamada. Sólo tienes que hacer clic en el AULA correspondiente, activar tu micrófono o cámara y automáticamente estarás en este espacio. \r\nLas AULAS se usan cuando los tutores dan una clase o para resolver dudas, reunirse en torno a algún tema o ejercicio y para compartir ideas. Cuando te encuentres en una llamada grupal, manten tu microfono silenciado. \r\n\r\n*Al final de este diálogo podras observar un ejemplo de una conexión exitosa a una sala de audio.*')
              .setImage('https://i.imgur.com/1jMk5UX.png')
              .setTimestamp()
            	.setFooter('*Si no puedes conectarte a las salas de audio, escuchar o enviar sonido intenta el comando $ayuda audio+ para ver soluciones a problemas comunes.*');

              return message.channel.send(exampleEmbed);

            }

            if (args[0] === 'audio+') {

              const Discord = require('discord.js');
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#5b34eb')
            	.setTitle('¡Aquí está la información de solución a los problemas de audio! :tools: :speaker:')
            	.setThumbnail('https://i.imgur.com/nFao1cI.jpeg')
              .setDescription('*__"No escucho nada durante una llamada"__* :bulb: Revisa que tengas seleccionadas tus bocinas y micrófono activos. Entra al menú Preferencias de Usuario / Audio y Video y en las opciones dispositivo de entrada y de salida selecciona tu dispositivo de auido. Puedes abrir el menú preferencias de usuales con el símbolo :gear: que aparece abajo a la izquierda en Discord, justo por debajo de la lista de #canales.\r\n\r\n*__"Escucho a los demás en la llamada pero con poco volúmen"__* :bulb: Desde la lista de usuarios conectados al canal de audio, da click derecho en el usuario que no logres escuchar con suficiente intensidad y aumenta el volúmen hasta 200%. Puedes revisar también tus preferencias de Audio y Video y subir el volúmen general a %200. \r\n\r\n *__"Escucho con suficiente intensidad el sonido, pero se corta mucho"__* :bulb: En este caso el problema puede ser una mala conexión a internet por parte del locutor o receptor, intenta acercarte el modem o a un lugar con mayor señal o bien utilizar el cable Ethernet para conectarte a internet. \r\n\r\n"__*Mi problema no se encuentra dentro de los anteriores o no se solucionó a pesar de estas instrucciones*__" :bulb: En ocasiones pueden ocurrir problemas poco frecuentes que no hayan sido considerados en este diálogo, en este caso ponte en contacto con un tutor para resolver esta situación.')
              .setImage('https://i.imgur.com/IHhhuWw.png','https://i.imgur.com/prs2vXl.png')
              .setTimestamp()
            	.setFooter('*Si estás buscando cómo utilizar el radio, puedes intentar el comando $ayuda radio. ¡Nada de poner música fea!*');

              return message.channel.send(exampleEmbed);

            }

            if (args[0] === 'radio') {

              const Discord = require('discord.js');
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#5b34eb')
              .setTitle('¡Aquí está la información de utilización del radio! :radio:')
              .setThumbnail('https://i.imgur.com/nFao1cI.jpeg')
              .setDescription('Conéctate al canal de voz radio para escuchar música. Una vez conectado, inicia el reproductor escribiendo en el canal de texto #radio el comando `-play` más el nombre del artista, canción, álbum o playlist y comenzará a reproducirse. Con el comando `-help` puedes ver los comandos disponibles para el reproductor.  \r\n \r\n *Dato: también te puedes conectar a alguna de las Salas de CLUB SOCIAL para platicar o comentar la música, etcétera.*')
              .setTimestamp()
              .setFooter('*Si no puedes conectarte a las salas de audio, escuchar o enviar sonido intenta el comando $ayuda audio+ para ver soluciones a problemas comunes.*');

              return message.channel.send(exampleEmbed);

            }


          if (args[0] === 'juegos') {

            const Discord = require('discord.js');
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#5b34eb')
            .setTitle('¡Aquí está la información de las salas de juegos! :video_game: ')
            .setThumbnail('https://i.imgur.com/nFao1cI.jpeg')
            .setDescription('En los canales de la categoría Juegos puedes encontrarte con otr@s compañera@s que comparten el amor por los juegos. \r\n :robot: **#botland** Un juego de Rol basado en comandos. \r\n :dragon: **#dragons-n-dungeons** ¡Únete a nuestra mesa de juego y vive aventuras épicas en tu imaginación! \r\n :billed_cap: **#pokemon** Gotta catch ‘em all!. \r\n\r\n*Utiliza el #club-gamer para compartir tu nombre de usuario en otras plataformas (PS4, Xbox, Steam, LoL, Blizzard, Nintendo, etc.) de manera que l@s demás podamos localizarte y jugar contigo.*')
            .setTimestamp()
            .setFooter('*Para empezar a jugar en #botland escribe en ese canal el comando `rpg tutorial`*');

            return message.channel.send(exampleEmbed);

          }

          if (args[0] === 'admin') {

            const Discord = require('discord.js');
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#5b34eb')
            .setTitle('¡Información para la resolución de problemas no académicos! :tools: ')
            .setThumbnail('https://i.imgur.com/nFao1cI.jpeg')
            .setDescription('@Alida#3470 es la persona encargada de #control-escolar. Hay que dirigirse a ella mediante el chat correspondiente cuando tengas problemas o dudas respecto a pagos, inscripciones, accesos, materias y demás cosas técnicas que se te puedan presentar en la plataforma.')
            .setTimestamp()
            .setFooter('*Recuerda que puedes contactar a todos los tutores por medio del correo institucional, ¡aunque tal vez los encuentres más rápido por aquí!*');

            return message.channel.send(exampleEmbed);

          }





    	},

  };
