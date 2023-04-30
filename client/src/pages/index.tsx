import Login from "@/pages/login"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const name = localStorage.getItem("name")
    if (!name) router.push("/login")
  }, [])
  return (
      <>
      
      </>
  )
}
