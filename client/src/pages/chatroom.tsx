import { FC, useEffect, useState } from 'react'
import Error from "next/error"
import ChatPage from "@/components/ChatPage"
import { LOCAL_STORAGE_KEY } from "@/utils/constants"

const ChatRoom: FC = (): JSX.Element => {
	const [ userName, setUserName ] = useState<string>()
	
	useEffect(() => {
		const userName = localStorage.getItem(LOCAL_STORAGE_KEY)
		setUserName(userName!)
	}, [])
	return (
			<>
				{
					userName
							? <ChatPage userName={ userName }/>
							: <Error statusCode={ 401 } title="Unauthorized - Please Login To Access The ChatRoom" withDarkMode={ false }/>
				}
			</>
	)
}

export default ChatRoom