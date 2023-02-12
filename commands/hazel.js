const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hazel')
		.setDescription('Information related to hazelnitwit.'),
	async execute(interaction) {
		await interaction.reply('Hazel - VTuber - 🎧 - https://twitch.tv/hazelnitwit');
	},
};