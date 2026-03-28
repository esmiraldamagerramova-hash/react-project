import { useState } from 'react'
import { toast } from 'react-toastify'

const Register = ({ setPage }) => {
    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        age: ''
    })

    const handleUserInput = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const validateStep = (e) => {
        e.preventDefault()

        if (!formData.name) {
            toast.error("enter your name")
        } else if (!formData.surname) {
            toast.error("enter your surname")
        } else if (!formData.age) {
            toast.error("enter your age")
        } else {
            setStep(2)
        }
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (!formData.email.includes("@")) {
            toast.error("email is incorrect")
            return
        }

        if (formData.password.length < 6) {
            toast.error("at least 6 chars")
            return
        }

        localStorage.setItem("user", JSON.stringify(formData))
        toast.success("you're logged!")

        setPage("login")
    }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <form className='border w-[300px] flex flex-col p-5 gap-3'>
            <h1 className="text-2xl text-center">Register</h1>

            {step === 1 ? (
                <>
                    <input
                      name="name"
                      placeholder='Name'
                      value={formData.name}
                      onChange={handleUserInput}
                      className='border px-2 py-1'
                    />

                    <input
                      name="surname"
                      placeholder='Surname'
                      value={formData.surname}
                      onChange={handleUserInput}
                      className='border px-2 py-1'
                    />

                    <input
                      name="age"
                      type="number"
                      placeholder='Age'
                      value={formData.age}
                      onChange={handleUserInput}
                      className='border px-2 py-1'
                    />

                    <button
                      onClick={validateStep}
                      className='bg-green-800 text-white py-2'
                    >
                      Next
                    </button>
                </>
            ) : (
                <>
                    <input
                      name="email"
                      placeholder='Email'
                      value={formData.email}
                      onChange={handleUserInput}
                      className='border px-2 py-1'
                    />

                    <input
                      name="password"
                      type="password"
                      placeholder='Password'
                      value={formData.password}
                      onChange={handleUserInput}
                      className='border px-2 py-1'
                    />

                    <button
                      onClick={handleRegister}
                      className='bg-green-800 text-white py-2'
                    >
                      Sign up
                    </button>
                </>
            )}

            <button
              type="button"
              onClick={() => setPage("login")}
              className='text-sm text-blue-600'
            >
              Already have an account?
            </button>
        </form>
    </div>
  )
}

export default Register
