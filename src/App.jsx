import { useState } from "react"
import ForgotPassword from "../pages/ForgotPassword";
import Homepage from "../pages/Homepage"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [page, setPage] = useState("login")

  return (
    <>
      <ToastContainer position="top-center" theme="light" />

{/* muellim burani gptden sorushdum ki browserde sehifeler arasinda kecid olsun rahat (comment yazmagida sorusdum, // islemirdi(((( ) */}
      {page === "login" && <Login setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "forgot" && <ForgotPassword setPage={setPage} />}
      {page === "home" && <Homepage setPage={setPage} />}
    </>
  )
}

export default App
