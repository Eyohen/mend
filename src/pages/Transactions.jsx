import React from 'react'
import AdminNav from '../components/AdminNav'
import SideBar from '../components/SideBar'
import TransactionBody from '../components/TransactionBody'

const Transactions = () => {
  return (
    <div>
          <AdminNav/>
        <div className='flex'>
        <SideBar/>
        <TransactionBody/>
        </div>
    </div>
  )
}

export default Transactions