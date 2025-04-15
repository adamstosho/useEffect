import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Cohorts = ({ cohorts }) => {


  console.log(cohorts)

  const navigate = useNavigate()
  
  return (
    <div className='w-[100%] ml-5'>
      <h1 className='w-[100%$] text-blue-500 text-center font-mono font-extrabold text-[30px]'>All cohorts</h1>
     
     <ul className='space-y-[20px] space-x-5 flex justify-center items-center'>
      {cohorts?.map((cohort) => (
        <li key={cohort?.id}> 
        <span className='text-blue-500 font-bold'>{`Cohort Name: ${cohort.name}`}</span>
          <ul>
            <li className='text-gray-600'>{`Mentor: ${cohort.mentor}`}</li>
            <li className='text-gray-600'>{`Total Students: ${cohort.studentNum}`}</li>
          </ul>
          
          <button onClick={() => navigate (`/cohort/${cohort?.id}`)} className='p-2 bg-orange-500 rounded-xl hover:bg-orange-600 text-white font-serif text-[14px]' >View Students </button>


        </li>
      ))}
     </ul>
    </div>
  )
}

export default Cohorts