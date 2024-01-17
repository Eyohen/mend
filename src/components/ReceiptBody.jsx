import React,{useState} from "react";
import { URL } from '../url'
import DatePicker from "react-datepicker";
import axios from 'axios'
import {Link, useNavigate, useParams } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";


const media = [
  {
    _id: 1,
    medium: "cash",
    },
    {
        _id: 2,
        medium: "POS",
    },
    {
        _id: 3,
        medium: "Transfer",
    },
   
    ]


const ReceiptBody = () => {
  const navigate = useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [text,setText]=useState("")
  const [customer,setCustomer]=useState("")
  const [price,setPrice]=useState("")
  const [date, setDate] = useState(new Date())
  const [information,setInformation]=useState("")
  const [advanced,setAdvanced]=useState("")
  const [startDate, setStartDate] = useState(new Date());
    const [selectedMedium, setSelectedMedium] = useState([])

    const [error,setError]=useState(false)
    const [isLoading,setIsLoading]=useState(false)

    const handleMedium = (e) => {
        setSelectedMedium(e.target.value);
      };

      const handlePriority = (e) => {
        setSelectedPriority(e.target.value);
      };


      const handleReceipt = async ()=>{
        setIsLoading(true)
        try{
          const accessToken = localStorage.getItem("access_token");

          if(!accessToken){
                // Handle the case where the access token is not available
            console.error('Access token not found')
          }

          const res = await axios.post(URL+"/api/receipts/send",{email,
            date:startDate,medium:selectedMedium, customer, price,information, advanced
          
          
          }, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })

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
        <p className="text-2xl text-center">Receipt</p>
          <input onChange={(e)=>setEmail(e.target.value)} className="border border-black px-2 py-1 w-[500px]" placeholder="Client Correct Email" />
          <input onChange={(e)=>setCustomer(e.target.value)} className="border border-black px-2 py-1" placeholder="Customer Name" />
          <input onChange={(e)=>setPrice(e.target.value)} className="border border-black px-2 py-1 w-[500px]" placeholder="Price" />
          <select value={selectedMedium} onChange={handleMedium} className="border border-black px-2 py-1">
            <option value="">Select payment medium:</option>
            {media.map(item => (
              <option key={item._id} value={item.medium}>{item.medium}</option>
            ) )}
          </select>
          <input onChange={(e)=>setInformation(e.target.value)} className="border border-black px-2 py-1 w-[500px]" placeholder="Describe the work done" />
          <input onChange={(e)=>setAdvanced(e.target.value)} className="border border-black px-2 py-1" placeholder="Enter advanced paid" />
         
          <p className='text-md text-gray-600'>Enter Date of Payment: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border border-black py-1 ' placeholder='Enter Due Date' /></p>
       

       
<button onClick={handleReceipt} className="bg-black text-white py-1">Create receipt</button>
{error && <h3 className="text-red-500 text-md ">Something went wrong</h3>}
          
        </div>)}
       
      </div>
    </div>
  );
};

export default ReceiptBody;
