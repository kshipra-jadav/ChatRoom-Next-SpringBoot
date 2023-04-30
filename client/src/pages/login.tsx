import { FC, useEffect, useState } from 'react'
import { Mulish } from "next/font/google"
import { useRouter } from "next/navigation"

const font = Mulish({
	subsets: [ "latin" ],
	weight: "300"
})

const Login: FC = (): JSX.Element => {
	const [ name, setName ] = useState<string>()
	const [ isNameEmpty, setIsNameEmpty ] = useState(false)
	
	const router = useRouter()
	const handleClick = () => {
		if (!name || name.length == 0) {
			setIsNameEmpty(true)
		}
		if (name && !isNameEmpty && name.length > 0) {
			localStorage.setItem("Client Name", name)
			router.push("/chatroom")
		}
	}
	useEffect(() => {
		if (name && name.length > 0) {
			setIsNameEmpty(false)
		}
	}, [ name ])
	return (
			<>
				<div className={ `flex flex-col w-screen h-screen bg-gray-700 items-center ${ font.className } text-white` }>
					<div className="text-5xl font-bold p-20">
						Login To The ChatRoom!
					</div>
					<div className="flex flex-row gap-5 items-center">
						<div className="text-2xl">
							Name :
						</div>
						<div>
							<input type="text"
							       className="text-black h-10 w-96 border-2 rounded-full text-center focus:outline-none focus:ring focus:ring-cyan-600 text-2xl"
							       onChange={ (e) => setName(e.target.value) }
							/>
						</div>
					</div>
					<div className="mt-5 text-3xl text-red-600 font-bold">
						{
								isNameEmpty && "Please Enter Name!"
						}
					</div>
					<div>
						<button type="submit"
						        className="h-[50px] mt-10 text-2xl w-96 border-4 rounded-full"
						        onClick={ handleClick }
						>
							Enter!
						</button>
					</div>
				</div>
			</>
	)
}

export default Login