import React from 'react'
import AdminNav from '../components/AdminNav'
import SideBar from '../components/SideBar'
import TaskBody from '../components/TaskBody'

const Task = () => {
  return (
    <div>
          <AdminNav/>
        <div className='flex bg-gray-200'>
        <SideBar/>
        <TaskBody/>
        </div>
    </div>
  )
}

export default Task