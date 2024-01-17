import React from 'react'
import SideBar from '../components/SideBar'
import Body from '../components/Body'
import AdminNav from '../components/AdminNav'

const Admin = () => {
  return (
    <div className='bg-gray-200'>
        <AdminNav/>
        <div className='flex'>
        <SideBar/>
        <Body/>
        </div>

    </div>
  )
}

export default Admin