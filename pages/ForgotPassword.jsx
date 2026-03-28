import { useState } from "react"
import { toast } from "react-toastify"

const ForgotPassword = ({ setPage }) => {
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        if (!email.includes("@")) {
            toast.error("email is wrong")
            return
        }

        toast.success("check your recovery link")
    }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='border w-[300px] flex flex-col p-5 gap-3'>
            <h1 className="text-2xl text-center">Forgot Password</h1>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className='border px-2 py-1'
            />

            <button onClick={handleSubmit} className='bg-green-800 text-white py-2'>
              Send
            </button>

            <button onClick={() => setPage("login")} className='text-sm text-blue-600'>
              Back to login
            </button>
        </div>
    </div>
  )
}

export default ForgotPassword
