import React from 'react'
import Gear from '../assets/images/gear.png'

const header = () => {
  return (
    <div className='w-dvw px-5 py-3 flex justify-evenly absolute top-1 left-1'>
        <div className='flex items-center h-auto'>
            <div  className='flex px-2 items-center'>
                <div className='shadow-lg shadow-sky-500 rounded-full'>
                    <img src={Gear} alt="Gear" className='animate-[spin_3s_linear_infinite] h-12 w-12 rounded-full'/>
                </div>
                <div>
                    <label className='text-lg absolute left-[47.5px] top-[21px]'>Hello World</label>
                </div>
            </div>
            <div  className='px-4 ml-14 flex'>
                <div className='px-2 hover:w-15 hover:border-b-sky-400 hover:shadow-xl hover:shadow-sky-600 hover:border-b-inherit  hover:border-x-sky-400 hover:bg-gradient-to-t from-sky-400 via-sky-800 to-zinc-900'>
                    button1
                </div>
                <div className='px-2 hover:w-15  hover:border-b-sky-400 hover:shadow-xl hover:shadow-sky-600 hover:border-b-inherit hover:border-x-sky-400 hover:bg-gradient-to-t from-sky-400 via-sky-800 to-zinc-900'>
                    button2
                </div>
            </div>
        </div>
        <div className='flex-grow'/>
        <div className='px-2 '>
            <div className='px-2 hover:w-15  hover:border-b-sky-400 hover:shadow-xl hover:shadow-sky-600 hover:border-b-4 hover:border-x-sky-400 hover:bg-gradient-to-t from-sky-400 via-sky-800 to-zinc-900'>
                logout
            </div>
        </div>
    </div>
  )
}

export default header