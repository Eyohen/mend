import React,{useState} from "react";
import { URL } from '../url'

import axios from 'axios'
import {Link, useNavigate, useParams } from 'react-router-dom'


const roles = [
    {
        _id: 1,
        role: "admin",
    },
    {
        _id: 2,
        role: "user",
    },
    
   
    ]

const EmployeeBody = () => {
  const navigate = useNavigate()
    const [role, setRole] = useState([])
    const [selectedRole, setSelectedRole] = useState([])
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [job,setJob]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const [isLoading,setIsLoading]=useState(false)

    const handleRole = (e) => {
        setSelectedRole(e.target.value);
      };

      const handleRegister = async ()=>{
        setIsLoading(true)
        try{
          const accessToken = localStorage.getItem("access_token");

          if(!accessToken){
                // Handle the case where the access token is not available
            console.error('Access token not found')
          }

          const res = await axios.post(URL+"/api/auth/register",{firstName,lastName,email,password,role:selectedRole,job}, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          }
)
          setFirstName(res.data.firstName)
          setLastName(res.data.lastName)
          setEmail(res.data.email)
          setJob(res.data.job)
          setPassword(res.data.password)
          setError(false)
          navigate("/dashboard")
          
        }
        catch(err){
          setError(true)
          console.log(err)
        }finally {
          setIsLoading(false)
        }
    
      }
    
  return (
    <div className="w-full">
    
      <div className="items-center h-[100vh] justify-center flex w-full">
        {isLoading ? (<p className="text-2xl">Loading...</p>) : ( <div className="flex flex-col gap-y-6">
        <p className="text-2xl text-center">Employee</p>
          <input onChange={(e)=>setFirstName(e.target.value)} className="border border-black px-2 py-1 w-full md:w-[500px]" placeholder="Employee First Name" />
          <input onChange={(e)=>setLastName(e.target.value)} className="border border-black px-2 py-1" placeholder="Employee Last Name" />
          <input onChange={(e)=>setEmail(e.target.value)} className="border border-black px-2 py-1" placeholder="Employee Email" />
          <input onChange={(e)=>setJob(e.target.value)} className="border border-black px-2 py-1" placeholder="Employee title" />

          <select value={selectedRole} onChange={handleRole} className="border border-black px-2 py-1">
            <option value="">Select Role:</option>
            {roles.map(item => (
              <option key={item._id} value={item.role}>{item.role}</option>
            ) )}
          </select>
          <input onChange={(e)=>setPassword(e.target.value)} className="border border-black px-2 py-1" placeholder="Set password" />

<button onClick={handleRegister} className="bg-black text-white py-1">Create Employee</button>
{error && <h3 className="text-red-500 text-md ">Something went wrong</h3>}
          
        </div>)}
       
      </div>
    </div>
  );
};

export default EmployeeBody;
