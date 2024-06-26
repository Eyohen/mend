import React,{useState} from "react";
import { URL } from '../url'
import DatePicker from "react-datepicker";
import axios from 'axios'
import {Link, useNavigate, useParams } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";


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

      const pickupstatus = [
        {
            _id: 1,
            pickupstatus: "not-ready",
        },
        {
            _id: 2,
            pickupstatus: "ready",
        },
        {
          _id: 3,
          pickupstatus: "picked-up",
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
  

const TaskBody = () => {
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
    const [selectedStatus, setSelectedStatus] = useState([])
    const [date, setDate] = useState(new Date())
    const [date2, setDate2] = useState(new Date())
    const [client,setClient]=useState("")
    const [work,setWork]=useState("")
    const [amount,setAmount]=useState("")
    const [tailor,setTailor]=useState("")
    const [customerphone,setCustomerPhone]=useState("")
    const [selectedPriority,setSelectedPriority]=useState([])
    const [selectedPickup,setSelectedPickup]=useState([])
    // const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
    const [selectedPickTime, setSelectedPickTime] = useState([])

    const handleStatus = (e) => {
        setSelectedStatus(e.target.value);
      };

      const handlePriority = (e) => {
        setSelectedPriority(e.target.value);
      };

      const handlePickTime = (e) => {
        setSelectedPickTime(e.target.value);
      };

      const handlePickup = (e) => {
        setSelectedPickup(e.target.value);
      };

      const handleTask = async ()=>{
        setIsLoading(true)
        try{
          const accessToken = localStorage.getItem("access_token");

          if(!accessToken){
                // Handle the case where the access token is not available
            console.error('Access token not found')
          }

          const res = await axios.post(URL+"/api/tasks/create",{client,work,date:startDate, dueDate:startDate2,status:selectedStatus,priority:selectedPriority,amount,customerphone,pickupstatus:selectedPickup,tailor, picktime:selectedPickTime}, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          setClient(res.data.client)
          setWork(res.data.work)
          setDate(res.data.date)
          setDate2(res.data.dueDate)

          
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
        <p className="text-2xl text-center">Task</p>
          <input onChange={(e)=>setClient(e.target.value)} className="border border-black px-2 py-1 w-full md:w-[500px]" placeholder="Client Name" />
          <input onChange={(e)=>setWork(e.target.value)} className="border border-black px-2 py-1" placeholder="Work " />
          <input onChange={(e)=>setAmount(e.target.value)} className="border border-black px-2 py-1" placeholder="Amount " />
          <p className='text-md text-gray-600'>Enter payment Date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border border-black py-1 ' /></p>
          <p className='text-md text-gray-600'>Enter Due Date: <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} className='border border-black py-1 ' placeholder='Enter Due Date' /></p>
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

          <select value={selectedPickup} onChange={handlePickup} className="border border-black px-2 py-1">
            <option value="">Select Pickup status:</option>
            {pickupstatus.map(item => (
              <option key={item._id} value={item.pickupstatus}>{item.pickupstatus}</option>
            ) )}
          </select>

          <select value={selectedPickTime} onChange={handlePickTime} className="border border-black px-2 py-1">
            <option value="">Select pickup time:</option>
            {picktimes.map(item => (
              <option key={item._id} value={item.picktime}>{item.picktime}</option>
            ) )}
          </select>


          <input onChange={(e)=>setTailor(e.target.value)} className="border border-black px-2 py-1" placeholder="Tailor in charge" />
          <input onChange={(e)=>setCustomerPhone(e.target.value)} className="border border-black px-2 py-1 " placeholder="Customers phone number " />

<button onClick={handleTask} className="bg-black text-white py-1">Create Task</button>
{error && <h3 className="text-red-500 text-md ">Something went wrong</h3>}
          
        </div>)}
       
      </div>
    </div>
  );
};

export default TaskBody;
