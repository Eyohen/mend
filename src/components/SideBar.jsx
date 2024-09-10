import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 bottom-0 border-2 px-3 h-[100vh] shadow-md bg-white hidden md:block '>
        
        <div className='flex flex-col gap-y-6 mt-16 items-center'>
        <Link to={'/dashboard'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Dashboard</p></Link>
        <Link to={'/employee'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Employees</p></Link>
        <Link to={'/receipt'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Receipts</p></Link>

        <Link to={'/task'}><p className='hover:bg-gray-300 rounded-md px-12 py-1 text-lg'>Tasks</p></Link>
        </div>
    
        
</div>
  )
}

export default SideBar