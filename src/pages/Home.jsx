import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center space-y-[20px] bg-blue-50'>
        <div className='border-[2px] p-8 rounded-[10px] bg-red-100'>
        <h1 className='text-blue-500 text-[30px] font-extrabold mb-4'>Cohort Manager</h1>
        
        <div className='flex justify-center items-center gap-4'>
          <button className='border-[2px] rounded p-2 bg-blue-400'><Link to="/cohorts">View Cohorts</Link></button>
          <button className='border-[2px] rounded p-2 bg-green-400 text-white'><Link>Add Cohorts</Link></button>
        </div>
        </div>
    </div>
  )
}

export default Home