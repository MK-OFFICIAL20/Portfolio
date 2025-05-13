import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthProvider'


const CreatTask = () => {

  const [userdata,setUserdata] = useContext(AuthContext)

   const [title, setTaskTitle] = useState('')
   const [date, setTaskDate] = useState('')
   const [assignTo, setAssignTo] = useState('')
   const [category, setCategory] = useState('')
   const [description, setTaskDescription] = useState('')

   const [newTask, setNewTask] = useState({})

   const submitHandler = (e) => {
         
          e.preventDefault();
          console.log(title,date,assignTo,category,description)
          setNewTask({title, date , assignTo ,description, category , active:false, newTask:true, failed:false , completed:false })

         

          const data = userdata
              console.log(data)
          data.forEach(function(elem){
            if(assignTo == elem.firstName){
              // console.log(elem.tasks)
               elem.tasks.push(newTask)
              //console.log(elem)
               elem.taskNumber.newTask = elem.taskNumber.newTask+1
            }
          })
  
          setUserdata(data)
         
          setTaskTitle("")
          setTaskDate("")
          setAssignTo("")
          setCategory("")
          setTaskDescription("")
    }
  return (
   <>
         <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form 
             onSubmit={(e)=>{
                submitHandler(e)
             }}
            className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                            
                            value={title}
                            onChange={(e)=>{
                                setTaskTitle(e.target.value)
                            }}
                           
                          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Make a UI design'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                            value={date}
                            onChange={(e)=>{
                                setTaskDate(e.target.value)
                            }}
                          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="date"
                         />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input 
                            
                            value={assignTo}
                            onChange={(e)=>{
                                 setAssignTo(e.target.value)
                            }}
                         className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Employee Name'
                         />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                            value={category}
                            onChange={(e)=>{
                                 setCategory(e.target.value)
                            }}
                         className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='Design,Devlopment, etc'
                        />
                    </div>
                </div>

              <div className='w-2/5 flex flex-col items-start'>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                  <textarea 
                        
                        value={description}
                        onChange={(e)=>{
                             setTaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border ' cols="30" rows="10">
                  </textarea>
                  <button className='mt-3 bg-emerald-600 rounded p-4'>Create Task</button>
              </div>
            </form>
        </div>
   </>
  )
}

export default CreatTask