import SockJS from "sockjs-client"
import { SERVER_URL } from "@/utils/constants"
import { Client, over, Message } from "stompjs"
import { ChatMessage } from "@/types/ChatMessage"


export function getStompClient(): Client {
	let Sock = new SockJS(`${SERVER_URL}/chat-app-server`)
	return over(Sock)
}

function onStompConnected(stompClient: Client) {
	let msg;
	stompClient.subscribe("/topic/public-chat", (message: Message) => {
		msg = JSON.parse(message.body)
	})
	return msg;
}

function onStompErrored() {
	console.error("Web Socket Connection Error")
}

function onMessageReceived(message: Message): ChatMessage {
	return JSON.parse(message.body)
}

function sendMessage(stompClient: Client, chatMessage: ChatMessage) {
	stompClient.send("/chat-app/message", {}, JSON.stringify(chatMessage))
}
