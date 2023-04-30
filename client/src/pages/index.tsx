import Login from "@/pages/login"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LOCAL_STORAGE_KEY } from "@/utils/constants"

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const name = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!name) router.push("/login")
    if (name) router.push("/chatroom")
  }, [])
  return (
      <>
      
      </>
  )
}
