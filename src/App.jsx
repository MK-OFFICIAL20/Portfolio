import React, { useContext, useEffect, useState } from 'react'
import Login from './Component/Auth/Login'
import EmployeeDashboard from './Component/Dashboard/EmployeeDashboard'
import AdminDashboard from './Component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

//   useEffect(() => {
//     //setLocalStorage()
//     getLocalStorage()
// },)
  
const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const [userdata,setUserdata] = useContext(AuthContext)


useEffect(() => {
     const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      console.log("user is logged ")
      const userdata = JSON.parse(loggedInUser)
      console.log(userdata)
      setUser(userdata.role)
      setLoggedInUserData(userdata.data)
    }
}, [])




const handleLogin = (email,password) => {
  if(email == 'admin@example.com'  && password =='free' ){
    
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    
  }else if({userdata}){
    const employee =  userdata.find((e)=>email == e.email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))  
    }
  }else{
    alert('Wrong Credentials . Please Enter correct email and password')
  }
}

  return (
   <>
        {!user ? <Login handleLogin={handleLogin}/> : ''}
        {user =='admin' ? <AdminDashboard changeUser = {setUser} data={loggedInUserData}/> :(user == 'employee' ? <EmployeeDashboard changeUser = {setUser} data={loggedInUserData}/>: null) }
   </>
  )
}

export default App