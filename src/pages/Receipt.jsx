import React from 'react'
import AdminNav from '../components/AdminNav'
import SideBar from '../components/SideBar'
import ReceiptBody from '../components/ReceiptBody'

const Receipt = () => {
  return (
    <div>
          <AdminNav/>
        <div className='flex bg-gray-300'>
        <SideBar/>
        <ReceiptBody/>
        </div>
    </div>
  )
}

export default Receipt