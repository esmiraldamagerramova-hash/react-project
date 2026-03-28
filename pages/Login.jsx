import { useState } from 'react'
import { toast } from 'react-toastify'

const Login = ({ setPage }) => {
    const [formData, setFormData] = useState({email: '', password: ''})

    const handleUserInput = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value 
        }))     
    }

    const handleLogin = () => {
        if (!formData.email.includes("@")) {
            toast.error("email is incorrect")
            return
        }

        if (formData.password.length < 6) {
            toast.error("at least 6 chars")
            return
        }

        localStorage.setItem("user", JSON.stringify(formData))
        toast.success("you're logged")

        setPage("home")
    }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='border w-[300px] flex flex-col p-5 gap-3'>
            <h1 className="text-2xl text-center">Login</h1>

            <input name="email" placeholder='Email' onChange={handleUserInput} className='border px-2 py-1' />
            <input name="password" type="password" placeholder='Password' onChange={handleUserInput} className='border px-2 py-1' />

            <button onClick={handleLogin} className='bg-green-800 text-white py-2'>Sign in</button>

            <button onClick={() => setPage("register")} className='text-sm text-blue-600'>
              Register
            </button>

            <button onClick={() => setPage("forgot")} className='text-sm text-blue-600'>
              Forgot password
            </button>
        </div>
    </div>
  )
}

export default Login
