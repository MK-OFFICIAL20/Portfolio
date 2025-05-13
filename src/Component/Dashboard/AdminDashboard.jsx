import React from 'react'
import Header from '../../other/Header'
import CreatTask from '../../other/CreatTask'
import AllTask from '../../other/AllTask'
import Head from '../../other/Head'

const AdminDashboard = (props) => {
  return (
    <>
    <div className='h-screen w-full p-10'>
        <Head changeUser ={props.changeUser} data={props.data}/> 
        <CreatTask/>
        <AllTask/>
    </div>
    </>
  )
}

export default AdminDashboard