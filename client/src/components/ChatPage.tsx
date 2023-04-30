import { FC, useEffect, useState } from 'react'
import { LOCAL_STORAGE_KEY } from "@/utils/constants"
import { useRouter } from "next/navigation"
import ChatBox from "@/components/ChatBox"
import { ChatMessage } from "@/types/ChatMessage"
import { makeMessage } from "@/utils/makeMessage"
import { Client, Message } from "stompjs"
import { getStompClient } from "@/utils/websocket"

type ChatPageProps = {
	userName: string
}

const ChatPage: FC<ChatPageProps> = ({ userName }): JSX.Element => {
	const router = useRouter()
	const [ message, setMessage ] = useState("")
	const [ chatMessages, setChatMessages ] = useState<ChatMessage[]>([])
	const [ stompClient, setStompClient ] = useState<Client>()
	const [ messageResponse, setMessageResponse ] = useState<ChatMessage>()
	
	// websocket utils
	const onStompConnected = () => {
		stompClient?.subscribe("/topic/public-chat", onMessageReceived)
	}
	const onStompErrored = () => {
		console.error("Web Socket Connection Error!")
	}
	
	const onMessageReceived = (response: Message) => {
		const chatMessage: ChatMessage = JSON.parse(response.body)
		chatMessage.timeStamp = new Date(chatMessage.timeStamp)
		setMessageResponse(chatMessage)
	}
	
	const sendMessage = (chatMessage: ChatMessage) => {
		stompClient?.send("/chat-app/message", {}, JSON.stringify(chatMessage))
	}
	// websocket utils end
	
	const handleLogOut = () => {
		localStorage.removeItem(LOCAL_STORAGE_KEY)
		router.push("/login")
	}
	
	const handleSendMessage = () => {
		if (message.length > 0) {
			const chatMessage: ChatMessage = makeMessage(userName, message)
			if(stompClient?.connected) {
				sendMessage(chatMessage)
			}
			setMessage("")
			
		}
	}
	
	useEffect(() => {
		if (!stompClient) {
			setStompClient(getStompClient())
		} else {
			stompClient.debug = () => {}
			stompClient.connect({}, onStompConnected, onStompErrored)
		}
	}, [stompClient])
	
	useEffect(() => {
		if(messageResponse) {
			setChatMessages([
				messageResponse,
				...chatMessages
			])
		}
	}, [messageResponse])
	
	return (
			<>
				<div className="flex flex-col bg-emerald-200">
					<div className="flex w-screen h-[10vh] justify-between pl-10 pr-20 pt-5 border-b-4 border-gray-500">
						<div className="text-2xl">
							Welcome { userName }
						</div>
						<div>
							<button
									className="border-4 border-black h-10 w-40 rounded-2xl text-xl"
									onClick={ handleLogOut }
							>
								Log Out
							</button>
						</div>
					</div>
					<div className="flex flex-row w-screen h-[15vh] pt-5 pl-10">
						<div className="flex w-4/5 h-20">
							<input type="text"
							       className="w-full p-2 text-xl rounded-md"
							       placeholder="Type Your Message Here!"
							       onChange={ (e) => setMessage(e.target.value) }
							       value={ message }
							/>
						</div>
						<div className="flex pl-10 pr-10 w-1/5 h-20">
							<button className="border-4 w-full border-black text-2xl" onClick={ handleSendMessage }>Send Message</button>
						</div>
					</div>
					<div className="flex flex-row w-screen h-[75vh] pt-5 pl-10">
						<ChatBox ChatMessages={chatMessages} />
					</div>
				</div>
			</>
	)
}

export default ChatPage