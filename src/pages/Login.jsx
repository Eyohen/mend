import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { URL } from "../url"
import { UserContext } from "../context/UserContext"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError] = useState(false)
  const {setUser} = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

const handleSubmit = async() => {
    //e.preventDefault()
    setIsLoading(true)
    try{
      const res = await axios.post(URL+"/api/auth/login", {email,password})

      const {access_token} = res.data;

      if(res.status == 200){
        localStorage.setItem("access_token", access_token)
        localStorage.setItem("currentUser", JSON.stringify(res.data))
        console.log(res.data)
        // setUser(res.data)
        navigate("/dashboard")
      }
    }
    catch(err) {
      setError(true)
      console.log(err)
    } finally {
      setIsLoading(false)
    }

}

  return (
    <div className='bg-gray-300 '>
      <p className='px-6 text-2xl'>MEND</p>
 
 <div className=''>
      {isLoading ? (<p className='text-2xl'>Loading...</p>) : ( <div className='flex flex-col gap-y-6 items-center justify-center h-[100vh]'>
        <p className='text-2xl'>LOGIN</p>
      <input placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} className='px-2 w-[500px] border border-black py-2'/>

      <input placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} className='px-2 w-[500px] border border-black py-2' />

      <button onClick={handleSubmit} className='bg-black text-white px-9 py-1'>Submit</button>
      {error && <h3 className='text-red-500 text-lg'>Something went wrong</h3>}
      </div>)}
     
      </div>
      
      </div>
  )
}

export default Login