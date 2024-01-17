import React from 'react'
import AdminNav from '../components/AdminNav'
import SideBar from '../components/SideBar'
import EmployeeBody from '../components/EmployeeBody'


const Employee = () => {
  return (
    <div>
          <AdminNav/>
        <div className='flex bg-gray-200'>
        <SideBar/>
        <EmployeeBody/>
        </div>
    </div>
  )
}

export default Employee