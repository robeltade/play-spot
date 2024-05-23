import React from 'react'
import {assets} from '../assets/assets'
const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 lg:flex text-white hidden'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'> Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'> Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'> 
          <div className='flex justify-between p-4  items-center'>
          <div className='flex items-center gap-3  cursor-pointer'>
                <img className='w-8' src={assets.stack_icon} alt="" />
                <p className='font-semibold'> Your Library</p>
            </div>
            <div className='flex items-center gap-3 cursor-pointer'>
                  <img className='w-5' src={assets.arrow_icon} alt="" />
                  <img className='w-5' src={assets.plus_icon} alt="" />
            </div>
          </div>
          <div className='bg-[#242424] p-4 m-2 rounded font-semibold items-start flex flex-col justify-start gap-1 pl-4 '>
            <h1>Create your playlist</h1>
            <p className='font-light'>it's easy we will help you </p>
            <button className='px-4 py-1.5 bg-white text-[15px] mt-4 text-black rounded-full'>Create playlist</button>
          </div>
          <div className='bg-[#242424] p-4 m-2 rounded font-semibold items-start flex flex-col justify-start gap-1 pl-4 '>
            <h1>Let's find some podcast to follow</h1>
            <p className='font-light'>We will keep you update </p>
            <button className='px-4 py-1.5 bg-white text-[15px] mt-4 text-black rounded-full'>Browse podcast</button>
          </div>
        </div>
    </div>
  )
}

export default Sidebar