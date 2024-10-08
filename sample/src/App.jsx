import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UserIcon, LockClosedIcon} from '@heroicons/react/24/outline'

function App() {

  return (
    <>
      <div className='border-4 border-zinc-300 h-auto w-auto justify-between items-center space-x-0 flex flex-col sm:flex-row'>
        <div className='border-2 border-slate-900 flex flex-col justify-center items-center p-5'>
          <div className='relative flex items-center p-2'>
            <label className='pr-2 font-mono'>Username</label>
            <UserIcon className="h-6 w-6 text-slate-300 absolute left-24 top-1/2 transform -translate-y-1/2"/>
            <input type="text" className='form-input rounded-full bg-transparent pl-9 w-60 focus:border-sky-700 font-mono hover:border-sky-700'  placeholder='Username'/>
          </div>
          <div className='relative flex items-center p-2'>
            <label className='pr-4 font-mono'>Password</label>
            <LockClosedIcon className="h-6 w-6 text-slate-300 absolute left-24 ml-2 top-1/2 transform -translate-y-1/2"/>
            <input type="password" className='form-input rounded-full bg-transparent pl-9 w-60  focus:border-sky-700 hover:border-sky-700' placeholder='Password'/>
          </div>
          <div className='p-2'>
            <button className='bg-sky-500 hover:bg-sky-700 w-36 rounded-full font-mono text-[16px]'>Login</button>
          </div>
        </div>
        <div className='border-2 border-slate-900 flex flex-col justify-center items-center p-5'>
          <div className='p-5'>
            <label className='text-xl font-mono'> Welcome</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
