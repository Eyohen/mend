import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Admin from './pages/Admin'
import Transactions from './pages/Transactions'
import Receipt from './pages/Receipt'
import Employee from './pages/Employee'
import Task from './pages/Task'
import Login from './pages/Login'
import Email from './pages/Email'
import EditTask from './components/EditTask'
import EditEmployee from './components/EditEmployee'
import EditTransaction from './components/EditTransaction'

const App = () => {
  return (
   <Routes>
     <Route exact path="/" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Admin/>}/>
        <Route exact path="/transaction" element={<Transactions/>}/>
        <Route exact path="/receipt" element={<Receipt/>}/>
        <Route exact path="/employee" element={<Employee/>}/>
        <Route exact path="/task" element={<Task/>}/>
        <Route exact path="/edittask/:id" element={<EditTask/>}/>
        <Route exact path="/editemployee/:id" element={<EditEmployee/>}/>
        <Route exact path="/edittransaction/:id" element={<EditTransaction/>}/>

        <Route exact path="/email" element={<Email/>}/>
   </Routes>
  )
}

export default App