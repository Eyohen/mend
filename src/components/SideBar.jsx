import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='border-2 px-20 h-[100vh] shadow-md bg-white hidden md:block '>
        
        <div className='flex flex-col gap-y-6 mt-16 items-center'>
        <Link to={'/dashboard'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Dashboard</p></Link>
        <Link to={'/employee'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Employees</p></Link>
        <Link to={'/receipt'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Receipts</p></Link>
        <Link to={'/transaction'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Payments</p></Link>
        <Link to={'/task'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Tasks</p></Link>
        </div>
    
        
</div>
  )
}

export default SideBar