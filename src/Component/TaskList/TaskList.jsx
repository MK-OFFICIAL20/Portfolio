import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import Complete from './Complete'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  //console.log(data)
  return (
   <>
   <div id='tasklist' className='h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 overflow-x-auto'>
          {data.tasks.map((elem,idx) => {
            // console.log(elem)
            // console.log(elem.active)
            // console.log(elem.newTask)
            // console.log(elem.completed)
            if(elem.active ){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
              return <Complete key={idx}  data={elem}/>
            }
            if(elem.failed){
              return <FailedTask key={idx}  data={elem}/>
            }
          })}
    </div>
   </>
  )
}

export default TaskList