import { ChatMessage } from "@/types/ChatMessage"

export function makeMessage(userName: string, message: string): ChatMessage {
	return {
		userName: userName,
		message: message,
		timeStamp: new Date(),
	}
}