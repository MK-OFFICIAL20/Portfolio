import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const AllTask = () => {
  const [userdata,setUserdata] = useContext(AuthContext)

  
 
  return (
    <>
      <div id='Alltask' className='bg-[#1c1c1c] p-5 rounded mt-5 '>
              <div className='bg-red-400 py-2 px-4 flex justify-between rounded'>
                          <h2 className='text-lg font-medium w-1/5 bg-red-400'>Employee Name</h2>
                          <h3 className='text-lg font-medium w-1/5 bg-red-400'>New tasks</h3>
                          <h5 className='text-lg font-medium w-1/5 bg-red-400'>Active Task</h5>
                          <h5 className='text-lg font-medium w-1/5 bg-red-400'>Completed </h5>
                          <h5 className='text-lg font-medium w-1/5 bg-red-400'>Failed </h5>
              </div>

              <div id='Alltaski' className=''>
                  {userdata.map(function(elem,idx){
                       return   <div key={idx} className='bg-[#1c1c1c] py-2 px-4 flex justify-between rounded mb-2'>
                                           <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
                                           <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumber.newTask}</h3>
                                           <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{elem.taskNumber.active}</h5>
                                           <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskNumber.completed}</h5>
                                           <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumber.failed} </h5>
                                </div>
                  })}   
              </div>  
      </div>
    </>
  )
}

export default AllTask