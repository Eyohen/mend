import React,{useEffect, useState} from 'react'
import axios from "axios"
import { URL } from "../url"
import { useNavigate, useParams } from "react-router-dom"
import { SlArrowLeft } from "react-icons/sl";
import DatePicker from "react-datepicker";


const statuses = [
  {
    _id: 1,
    status: "not-done",
    },
    {
        _id: 2,
        status: "pending",
    },
    {
        _id: 3,
        status: "completed",
    },
   
    ]

    const priorities = [
      {
          _id: 1,
          priority: "high",
      },
      {
          _id: 2,
          priority: "medium",
      },
      {
        _id: 3,
        priority: "low",
    },
      ]


      const picktimes = [
        {
          _id: 1,
         picktime: "7:00am",
          },
          {
              _id: 2,
             picktime: "8:00am",
          },
          {
              _id: 3,
             picktime: "9:00am",
          },
          {
            _id: 4,
           picktime: "10:00am",
            },
            {
                _id: 5,
               picktime: "11:00am",
            },
            {
                _id: 6,
               picktime: "12:00pm",
            },
            {
              _id: 7,
             picktime: "1:00pm",
              },
              {
                  _id: 8,
                 picktime: "2:00pm",
              },
              {
                  _id: 9,
                 picktime: "3:00pm",
              },
              {
                _id: 10,
               picktime: "4:00pm",
                },
                {
                    _id: 11,
                   picktime: "5:00pm",
                },
                {
                    _id: 12,
                   picktime: "6:00pm",
                },
                {
                  _id: 13,
                 picktime: "7:00pm",
              },
          ]

const EditTask = () => {
  const taskId = useParams().id
  const navigate=useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const [selectedStatus, setSelectedStatus] = useState([])
  const [selectedPriority, setSelectedPriority] = useState([])
  const [date, setDate] = useState(new Date())

  const [client,setClient]=useState("")   
  const [amount,setAmount]=useState("")   
  const [work,setWork]=useState("")   
  const [error,setError]=useState(false)
  const [isLoading,setIsLoading]=useState(false)

  const handleStatus = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handlePriority = (e) => {
    setSelectedPriority(e.target.value);
  };



  const fetchTasks = async()=>{
    try{
      const res = await axios.get(URL+"/api/tasks/"+taskId)
      setClient(res.data.client)
      setWork(res.data.work)
      setAmount(res.data.amount)
      setSelectedPriority(res.data.priority)
      setSelectedStatus(res.data.status)
     
    }

    catch(err){
      console.log(err)
    }
  }


  const updateTask = async ()=>{
    setIsLoading(true)
    try{
      const accessToken = localStorage.getItem("access_token");

      if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }

      const res = await axios.put(URL+"/api/tasks/"+taskId, {client,work,date:startDate,status:selectedStatus,priority:selectedPriority, amount}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      })
      setClient(res.data.client)
      setWork(res.data.work)
      setDate(res.data.date)
      setAmount(res.data.amount)

      
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



  useEffect(()=>{
    fetchTasks()
  },[taskId])

  
  return (
    <div className="w-full">
      
    
    <div className="items-center h-[100vh] justify-center flex w-full">
      {isLoading ? (<p className="text-2xl">Loading...</p>) : ( <div className="flex flex-col gap-y-6">
      <p className="text-2xl text-center">Update Task</p>
        <input onChange={(e)=>setClient(e.target.value)} value={client} className="border border-black px-2 py-1 w-full md:w-[500px]" placeholder="Client Name" />
        <input onChange={(e)=>setWork(e.target.value)} value={work} className="border border-black px-2 py-1" placeholder="Work" />
        <input onChange={(e)=>setAmount(e.target.value)} value={amount} className="border border-black px-2 py-1" placeholder="Amount" />

        <p className='text-md text-gray-600'>Enter Due Date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border border-black py-1 ' placeholder='Enter Due Date' /></p>
        <select value={selectedStatus} onChange={handleStatus} className="border border-black px-2 py-1">
          <option value="">Select Status:</option>
          {statuses.map(item => (
            <option key={item._id} value={item.status}>{item.status}</option>
          ) )}
        </select>

        
        <select value={selectedPriority} onChange={handlePriority} className="border border-black px-2 py-1">
            <option value="">Select Priority:</option>
            {priorities.map(item => (
              <option key={item._id} value={item.priority}>{item.priority}</option>
            ) )}
          </select>


<button onClick={updateTask} className="bg-black text-white py-1">Update Task</button>
{error && <h3 className="text-red-500 text-md ">Something went wrong</h3>}
        
      </div>)}
     
    </div>
  </div>
  )
}

export default EditTask