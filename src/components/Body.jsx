import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { URL, IF } from '../url'


const datas = [{
    id: 14,
    tenant: "Shell Intl",
    email: "shell.nigeria@gmail.com",
    phone: "0907837433",
    status: "pending",
    date: "19-03-2024",
    type: "half",
    time: "3pm",

},
{
    id: 15,
    tenant: "Chevron",
    email: "chevron.nigeria@gmail.com",
    phone: "0907837433",
    status: "completed",
    date: "19-03-2024",
    type: "half",
    time: "3pm",

},
{
    id: 16,
    tenant: "ExxonMobil",
    email: "exxon.nigeria@gmail.com",
    phone: "0907837433",
    status: "pending",
    date: "19-03-2024",
    type: "full",
    time: "3pm",
}
]


const data2 = [{
    id: 1,
    name: "Beatrice ",
    amount: "15,000",
    status: "pending",
    date: "19-03-2024",
    type: "POS",

},
{
    id: 2,
    name: "Elizabeth",
    amount: "7,000",
    status: "completed",
    date: "19-03-2024",
    type: "Transfer",

},
{
    id: 3,
    name: "David",
    amount: "15,000",
    status: "pending",
    date: "19-03-2024",
    type: "POS",

}

]


const data3 = [{
    id: 1,
    name: "Beatrice ",
    amount: "15,000",
    date: "19-03-2024",


},
{
    id: 2,
    name: "Elizabeth",
    amount: "7,000",
    date: "19-03-2024",


},
{
    id: 3,
    name: "David",
    amount: "15,000",
    date: "19-03-2024",


}

]


const data4 = [{
  id: 1,
  name: "Beatrice ",
  amount: "15,000",
  date: "19-03-2024",


},
{
  id: 2,
  name: "Elizabeth",
  amount: "7,000",
  date: "19-03-2024",


},
{
  id: 3,
  name: "David",
  amount: "15,000",
  date: "19-03-2024",


}

]



const Body = () => {
    const [data, setData] = useState([])
    const [workers, setWorkers] = useState([])
    const [tasks, setTasks] = useState([])
    const [receipts, setReceipts] = useState([])

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
  
  

    
    console.log("message",data2)
  return (
    <div className="p-16 bg-gray-200">

        <div className='flex gap-x-6 md:flex-row flex-col gap-y-6'>




        
<div className=" flex ">
            <div className='bg-white p-2'>
            <p className='font-bold text-lg'>Receipts Sent</p>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
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
           

           
          
           
          </tr>
        </thead>
        <tbody>
     
            {receipts.map((user, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={user.id}
              >
                 <td class="px-6 py-2">{index + 1}</td>
    
                <td class="px-6 py-2">{user.customer}</td>
                <td class="px-6 py-2">{user.email}</td>    

            
                <td class="px-6 py-2">{user.price}</td>
      
               
        
              </tr>
            ))}
        </tbody>
      </table>
      </div>
        </div> 


        <div className="items-center  flex ">
            <div className='bg-white p-2'>
            <p className='font-bold text-lg'>Scehduled Payments</p>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
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
              status
            </th>
       
            <th scope="col" class="px-6 py-3 font-light">
              date
            </th>
           
            <th scope="col" class="px-6 py-3 font-light">
             type
            </th>
           
          
           
          </tr>
        </thead>
        <tbody>
     
            {data2.map((user, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={user.id}
              >
                 <td class="px-6 py-2">{index + 1}</td>
    
                <td class="px-6 py-2">{user.name}</td>
                <td class="px-6 py-2">{user.amount}</td>    
                <td class="px-6 py-4">
                {user.status == "pending" ?  ( <p className='bg-red-400 px-1 rounded-full text-white flex justify-center animate-pulse'>{user.status}</p>) : ( <p className='bg-green-400 px-1 rounded-full text-white'>{user.status}</p>)}
                </td>
            
                <td class="px-6 py-2">{user.date}</td>
                <td class="px-6 py-2">{user.type}</td>
     
               
        
              </tr>
            ))}
        </tbody>
      </table>
      </div>
        </div>  

        </div>



{/* employee + tasks table */}
<div className='flex gap-x-6  md:flex-row flex-col gap-y-6'>

<div className="flex mt-16 ">
            <div className='bg-white p-2'>
            <p className='font-bold text-lg'>Staff</p>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
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
                {/* <td class="px-6 py-2">{user.type}</td> */}

        
              </tr>
            ))}
        </tbody>
      </table>
      </div>
        </div> 







        <div className=" justify-center flex mt-16 ">
            <div className='bg-white p-2'>
            <p className='font-bold text-lg'>Scehduled Tasks</p>
            <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 ">
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
              due date
            </th>
           
            <th scope="col" class="px-6 py-3 font-light">
              status
            </th>
            <th scope="col" class="px-6 py-3 font-light ">
              priority
            </th>
          
           
          </tr>
        </thead>
        <tbody>
          {/* {data?.data?.participants
            .filter((user) => user.BetTribeLog !== null)
            .map((user, index) => ( */}
            {tasks.map((user, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
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
                <td class="px-6 py-2">{new Date(user.date).toDateString()}</td>
                <td class="px-6 py-4">
                {user.status == "pending" ?  ( <p className='bg-yellow-400 flex justify-center rounded-full text-white animate-pulse'>{user.status}</p>) : user.status == "completed" ?  ( <p className='bg-green-400 flex justify-center rounded-full px-1 animate-pulse text-white'>{user.status}</p>) : ( <p className='bg-red-400 flex justify-center rounded-full px-1 animate-pulse text-white'>{user.status}</p>)}
                </td>
                <td class="px-6 py-4">
                {user.priority == "high" ?  ( <p className='bg-red-400 flex justify-center rounded-full text-white animate-pulse'>{user.priority}</p>) : user.priority == "medium" ?  ( <p className='bg-yellow-400 flex justify-center rounded-full px-1 animate-pulse text-white'>{user.priority}</p>) : ( <p className='bg-green-400 flex justify-center rounded-full px-1 animate-pulse text-white'>{user.status}</p>)}
                </td>
             
              </tr>
            ))}
        </tbody>
      </table>
      </div>
        </div>


</div>


    </div>
  )
}

export default Body