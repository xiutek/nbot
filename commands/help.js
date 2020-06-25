const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Lista de todos los comandos e información sobre ellos.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Aquí puedes ver la lista de todos los comandos:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\n¡Puedes enviar \`${prefix}help [command name]\` para obtener información sobre un comando en específico!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('¡Recibiste un mensaje privado con la lista de comandos!');
				})
				.catch(error => {
					console.error(`No se pudo enviar la lista de comandos a ${message.author.tag}.\n`, error);
					message.reply('Parece que tus opciones de privacidad no permiten mensajes privados.');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('¡Este comando no existe!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Alias:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Descripción:** ${command.description}`);
		if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Enfriamento:** ${command.cooldown || 3} segundo(s)`);

		message.channel.send(data, { split: true });
	},
};
