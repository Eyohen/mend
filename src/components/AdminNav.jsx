import React, { useState, useEffect } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IF, URL } from "../url"

const AdminNav = () => {
    const {id: userId} = useParams()
    const [open, setOpen] = useState()
    const [data, setData] = useState([])
    const navigate = useNavigate()


    const logOut = async () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("currentUser");
      setData(null)
      navigate("/")
    }  
  

    const fetchProfile = async () => {
      try{
        const accessToken = localStorage.getItem("access_token")
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        console.log(typeof currentUser)
  
  
        if(!currentUser){
          return ;
        }
  
  
        if(!accessToken){
          // Handle the case where the access token is not available
      console.error('Access token not found')
    }
  
         const res = await axios.get(URL+"/api/users/"+currentUser?._id, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        })
        
         console.log(res.data)
         setData(res.data)
      }
      catch(err){
         console.log(err)
      }
    }
    
  
    useEffect(()=>{
      fetchProfile()
    
    },[])

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }
  return (
    <div className='py-4 shadow-md px-12 bg-white'>
        <div className='flex justify-between'>
        <p className='px-6 text-2xl'>MEND</p>

        <div className='flex gap-x-2 items-center'>
          <p className='border-2 border-black px-3 rounded-full w-9 h-9 flex justify-center items-center font-bold'>{data?.firstName?.charAt(0)}</p>
        {/* <button className='bg-white p-4 rounded-full text-black h-6 w-6 items-center justify-center flex'>{data?.firstname?.charAt(0)}</button> */}
        <FiChevronDown size={25} onClick={handleOpen} className='relative'/>
       {open ?  (<div class="block absolute min-w-[300px] bg-white mt-[150px] right-[1px] p-4 shadow-md z-30 text-center">
            <div>
                <p className='font-bold w-full'>{data.firstName}</p>
                <Link to={'/dashboard'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Dashboard</p></Link>
        <Link to={'/employee'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Employees</p></Link>
        <Link to={'/receipt'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Receipts</p></Link>

        <Link to={'/task'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Tasks</p></Link>
                <p onClick={logOut} className='mt-2 cursor-pointer'>Log Out</p>
            </div> 
  </div>) : (null)}

        </div>


        </div>
        {/* <p className='px-6 text-2xl'>Simisola</p> */}
    </div>
  )
}

export default AdminNav