import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { URL, IF } from '../url'
import { SlTrash } from "react-icons/sl";
import { SlPencil } from "react-icons/sl";
import { Link } from 'react-router-dom';




const Body = () => {
    const [data, setData] = useState([])
    const [workers, setWorkers] = useState([])
    const [tasks, setTasks] = useState([])
    const [receipts, setReceipts] = useState([])
    const [transactions, setTransactions] = useState([])



    const handleDelete=async(userId)=>{
      try{
        const accessToken = localStorage.getItem("access_token");

        if(!accessToken){
              // Handle the case where the access token is not available
          console.error('Access token not found')
        }
  
  
        const res = await axios.delete(URL+"/api/receipts/"+userId,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setReceipts((prevData) => prevData.filter(user => user._id !== userId));
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }


    const handleDelete2=async(userId)=>{
      try{
        const accessToken = localStorage.getItem("access_token");

        if(!accessToken){
              // Handle the case where the access token is not available
          console.error('Access token not found')
        }
  
  
        const res = await axios.delete(URL+"/api/transactions/"+userId,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setTransactions((prevData) => prevData.filter(user => user._id !== userId));
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }

    const handleDelete3=async(userId)=>{
      try{
        const accessToken = localStorage.getItem("access_token");

        if(!accessToken){
              // Handle the case where the access token is not available
          console.error('Access token not found')
        }
  
  
        const res = await axios.delete(URL+"/api/users/"+userId,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setWorkers((prevData) => prevData.filter(user => user._id !== userId));
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }


    const handleDelete4=async(userId)=>{
      try{
        const accessToken = localStorage.getItem("access_token");

        if(!accessToken){
              // Handle the case where the access token is not available
          console.error('Access token not found')
        }
  
  
        const res = await axios.delete(URL+"/api/tasks/"+userId,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setTasks((prevData) => prevData.filter(user => user._id !== userId));
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }





    const fetchWorkers = async () => {

      const accessToken = localStorage.getItem("access_token");

      if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }


        const res = await axios.get(URL+"/api/users",{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
        )
        setWorkers(res.data)
        console.log(res.data)
    }


    useEffect(() => {
      fetchWorkers()
    }, [])


    const fetchTasks = async () => {

      const accessToken = localStorage.getItem("access_token");

      if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }


        const res = await axios.get(URL+"/api/tasks",{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
        )
        setTasks(res.data)
        console.log(res.data)
    }


    useEffect(() => {
      fetchTasks()
    }, [])



    const fetchTransactions = async () => {

      const accessToken = localStorage.getItem("access_token");

      if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }


        const res = await axios.get(URL+"/api/transactions",{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
        )
        setTransactions(res.data)
        console.log(res.data)
    }


    useEffect(() => {
      fetchTransactions()
    }, [])



    const fetchReceipts = async () => {

      const accessToken = localStorage.getItem("access_token");

      if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }


        const res = await axios.get(URL+"/api/receipts",{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
        )
        setReceipts(res.data)
        console.log(res.data)
    }


    useEffect(() => {
      fetchReceipts()
    }, [])
  
  

    
   
  return (
    <div className="p-16 bg-gray-200">

        {/* <div className='flex gap-x-6 md:flex-row flex-col gap-y-6'> */}




        
<div className=" flex md:gap-x-12">
            <div className='bg-white p-2'>
            <p className='font-bold text-lg'>Receipts Sent</p>
            <div class="max-h-60 overflow-y-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 table-auto">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
          <th scope="col" class="px-6 py-3 font-light ">
              id
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              name
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              amount
            </th>
         
       
            <th scope="col" class="px-6 py-3 font-light">
              date
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              delete
            </th>

           
          
           
          </tr>
        </thead>
        <tbody>
     
            {receipts.map((user, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={user.id}
              >
                 <td class="px-6 py-2">{index + 1}</td>
    
                <td class="px-6 py-2">{user.email}</td>
                <td class="px-6 py-2">{user.price}</td>    

            
                <td class="px-6 py-2">{new Date(user.date).toLocaleDateString()}</td>
                <td class="px-6 py-2" onClick={() => handleDelete(user._id)}><SlTrash className='text-red-800'/></td>
      
               
        
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      </div>
       


      
        <div className='bg-white p-2'>
            <p className='font-bold text-lg'>Staff</p>
            <div class="max-h-60 overflow-y-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
          <th scope="col" className="px-6 py-3 font-light ">
              id
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              name
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              job title
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              role
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              delete
            </th>
           

           
          
           
          </tr>
        </thead>
        <tbody>
     
            {workers.map((user, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={user.id}
              >
                 <td class="px-6 py-2">{index + 1}</td>
    
                <td class="px-6 py-2">{user.firstName}</td>
                <td class="px-6 py-2">{user.job}</td>    

            
                <td class="px-6 py-2">{user.role}</td>
                <td class="px-6 py-2" onClick={() => handleDelete3(user._id)}><SlTrash className='text-red-800'/></td>

        
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      </div> 

        </div>
         {/* </div>  */}



{/* employee + tasks table */}









        <div className=" justify-center flex mt-16 ">

            <div className='bg-white p-2'>
            <p className='font-bold text-lg'>Scehduled Tasks</p>
            <div class="max-h-60 overflow-y-auto">
            <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 table-auto">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
          <th scope="col" class="px-6 py-3 font-light ">
              id
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              client
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              work
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              amount
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              pay date
            </th>
       
            <th scope="col" class="px-6 py-3 font-light">
              due date
            </th>
           
            <th scope="col" class="px-6 py-3 font-light">
              status
            </th>
            <th scope="col" class="px-6 py-3 font-light ">
              priority
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              edit
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              delete
            </th>
           
          </tr>
        </thead>
        <tbody className=''>
          {/* {data?.data?.participants
            .filter((user) => user.BetTribeLog !== null)
            .map((user, index) => ( */}
            {tasks.map((user, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200 h-[10px]"
                key={user.id}
              >
                 <td class="px-6 py-2">{index + 1}</td>
                {/* <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  
                  <img
                    className="w-11 h-11"
                    src={user?.BetTribeLog?.profileImage}
                    alt=""
                  />
                </th> */}
                <td class="px-6 py-2">{user.client}</td>

                <td class="px-6 py-2">{user.work}</td>
                <td class="px-6 py-2">{user.amount}</td>
                <td class="px-6 py-2">{new Date(user.date).toLocaleDateString()}</td>
                <td class="px-6 py-2">{new Date(user.dueDate).toLocaleDateString()}</td>
                <td class="px-6 py-4">
                {user.status == "pending" ?  ( <p className='bg-yellow-400 flex justify-center rounded-full text-white animate-pulse'>{user.status}</p>) : user.status == "completed" ?  ( <p className='bg-green-400 flex justify-center rounded-full px-1 animate-pulse text-white'>{user.status}</p>) : ( <p className='bg-red-400 flex justify-center rounded-full px-1 animate-pulse text-white'>{user.status}</p>)}
                </td>
                <td class="px-6 py-4">
                {user.priority == "high" ?  ( <p className='bg-red-400 flex justify-center rounded-full text-white animate-pulse'>{user.priority}</p>) : user.priority == "medium" ?  ( <p className='bg-yellow-400 flex justify-center rounded-full px-1 animate-pulse text-white'>{user.priority}</p>) : ( <p className='bg-green-400 flex justify-center rounded-full px-1 animate-pulse text-white'>{user.status}</p>)}
                </td>
                <Link to={`/edittask/${user._id}`}><td class="px-6 py-2"><SlPencil className='mt-3' /></td></Link>
                <td class="px-6 py-2" onClick={() => handleDelete4(user._id)}><SlTrash className='text-red-800'/></td>
             
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      </div>
        </div>


</div>


    // </div>
  )
}

export default Body