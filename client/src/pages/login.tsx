import { FC } from 'react'
import {Mulish} from "next/font/google"

const font = Mulish({
	subsets: ["latin"],
	weight: "300"
})

const Login: FC = (): JSX.Element => {
	return (
			<>
				<div className={ `flex flex-col w-screen h-screen bg-gray-700 items-center ${font.className} text-white` }>
					<div className="text-5xl font-bold p-20">
							Login To The ChatRoom!
					</div>
					<div className="flex flex-row gap-5 items-center">
						<div className="text-2xl">
							Name :
						</div>
						<div>
							<input type="text" className="text-black h-10 w-96 border-2 rounded-full text-center focus:outline-none focus:ring focus:ring-cyan-600"/>
						</div>
					</div>
						<div>
							<button type="submit" className="h-[50px] mt-10 text-2xl w-96 border-4 rounded-full">Enter!</button>
						</div>
				</div>
			</>
	)
}

export default Login