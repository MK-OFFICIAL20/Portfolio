import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sumbitHandler = (e) => {
        e.preventDefault()
        // console.log("form filled")
        handleLogin(email,password)
        setPassword('')
        setEmail('')
    }

  return (
    <>
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
             onSubmit={(e)=>{ 
                sumbitHandler(e)
            }}
            className='flex flex-col items-center justify-center '>
                <input
                value={email}
                onChange={(e)=>{
                   setEmail(e.target.value)
                }}
                required autoComplete='email' type="email" placeholder='Enter your email' className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-400' 
                />

                <input
                value={password}
                onChange={(e)=>{
                   setPassword(e.target.value   )
                }}
                required autoComplete='current-password' type="password" placeholder='Enter password' className='bg-transparent outline-none border-2 border-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-400 mt-3' 
                />
                <button className='text-white  outline-none  bg-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-gray-400 mt-5'> Log IN</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login