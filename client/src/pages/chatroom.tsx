import { FC, useEffect, useState } from 'react'

const ChatRoom: FC = (): JSX.Element => {
	const [ userName, setUserName ] = useState<string>()
	
	useEffect(() => {
		const userName = localStorage.getItem("Client Name")
		setUserName(userName!)
	})
	return (
			<>
				<div>Welcome {userName}</div>
			</>
	)
}

export default ChatRoom