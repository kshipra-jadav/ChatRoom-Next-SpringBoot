import { FC } from 'react'
import { ChatMessage } from "@/types/ChatMessage"

type ChatBoxProps = {
	ChatMessages: ChatMessage[]
}

const ChatBox: FC<ChatBoxProps> = ({ChatMessages}): JSX.Element => {
	return (
			<>
				<div className="flex flex-col gap-5 w-full">
					{
							ChatMessages && ChatMessages.length > 0 && ChatMessages.map(message => {
								return(
										<div className="flex flex-row" key={message.timeStamp.toLocaleTimeString()}>
											<div>
												{message.message} -
												&nbsp;<span className="font-bold">{message.userName}</span>
												&nbsp;<span className="italic">({message.timeStamp.toLocaleTimeString()})</span>
											</div>
										
										</div>
								)
							})
					}
				</div>
			</>
	)
}

export default ChatBox