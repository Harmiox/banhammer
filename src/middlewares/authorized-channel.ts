import { Message } from '@yamdbf/core';
import { GuildMember } from 'discord.js';
import { ConfigService } from '../config/config.service'; 

export async function checkChannelPermissions(
		message: Message, 
		args: any[], 
		config: ConfigService,
		owners: string[]
	// @ts-ignore
	): Promise<[Message, any[]]>{
	const member: GuildMember = message.member as GuildMember;
	const authorId: string = message.author ? message.author.id : '';
	if ((message.channel.id === config.discord.authorizedChannelId) && member.roles.has(config.discord.authorizedRoleId)) { return [message, args]; }
	if ((owners.indexOf((authorId)) >= 0) && message.channel.type === 'dm') { return [message, args]; }
}