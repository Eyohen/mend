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



const TransactionBody = () => {
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
    const [selectedStatus, setSelectedStatus] = useState([])
    const [date, setDate] = useState(new Date())
    const [name,setName]=useState("")
    const [amount,setAmount]=useState("")

   
    const [error,setError]=useState(false)
    const [isLoading,setIsLoading]=useState(false)

    const handleStatus = (e) => {
        setSelectedStatus(e.target.value);
      };




      const handleTransaction = async ()=>{
        setIsLoading(true)
        try{
          const accessToken = localStorage.getItem("access_token");

          if(!accessToken){
                // Handle the case where the access token is not available
            console.error('Access token not found')
          }

          const res = await axios.post(URL+"/api/transactions/create",{name,amount,date:startDate,status:selectedStatus}, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          setName(res.data.name)
          setAmount(res.data.amount)
          setDate(res.data.date)

          
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
        <p className="text-2xl text-center">Transactions</p>
          <input onChange={(e)=>setName(e.target.value)} className="border border-black px-2 py-1 w-full md:w-[500px]" placeholder="Client Name" />
          <input onChange={(e)=>setAmount(e.target.value)} className="border border-black px-2 py-1" placeholder="Enter Amount" />

          <p className='text-md text-gray-600'>Enter Due Date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border border-black py-1 ' placeholder='Enter Due Date' /></p>
          <select value={selectedStatus} onChange={handleStatus} className="border border-black px-2 py-1">
            <option value="">Select Status:</option>
            {statuses.map(item => (
              <option key={item._id} value={item.status}>{item.status}</option>
            ) )}
          </select>

    
<button onClick={handleTransaction} className="bg-black text-white py-1">Create Transactions</button>
{error && <h3 className="text-red-500 text-md ">Something went wrong</h3>}
          
        </div>)}
       
      </div>
    </div>
  );
};

export default TransactionBody;
