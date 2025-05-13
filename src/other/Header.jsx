import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    alert("are you sure ?")
    props.changeUser('')
    // window.location.reload() 

  }
   console.log(props)
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold '>{props.data.firstName} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 rounded-sm text-lg font-medium p-2 text-white'>Log Out</button>
      </div>
    </>
  )
}

export default Header