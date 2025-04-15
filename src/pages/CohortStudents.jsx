  import React, { useEffect, useState } from 'react'
  import { useParams } from 'react-router-dom'

  const CohortStudents = ({cohorts}) => {

    const {id} = useParams()

    const [students, setStudents] = useState([]);

    useEffect (() => {
      if (students.length) return;

      const pasrseNum = parseInt(id)

      console.log(pasrseNum)

      const filteredCohort = cohorts?.filter((cohort) => cohort.id === pasrseNum)

      console.log(filteredCohort[0])

      if(filteredCohort.length) 
        setStudents(filteredCohort[0]?.students)
    }, [cohorts.length])


    console.log(students)

    return (
      <div>

        <table  className='"min-w-full divide-y divide-gray-200 bg-white text-sm text-left text-gray-700"'>

          <thead className='bg-blue-300 text-gray-700 uppercase text-xs'>
          <tr>
            <th className="px-6 py-4 font-bold">S/N</th>
            <th className="px-6 py-4 font-bold">Name</th>
            <th className="px-6 py-4 font-bold">Age</th>
            <th className="px-6 py-4 font-bold">Height</th>
          </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
          {
            students?.map((student, index) => (
              <tr key={index} className= "hover:bg-gray-50">
                <td className='px-2 py-2 text-center font-bold text-red-800'>{index + 1}</td>
                <td className='px-2 py-2 text-center'>{student.name}</td>
                <td className='px-2 py-2 text-center'>{student.age}</td>
                <td className='px-2 py-2 text-green-600 font-semibold text-center'>{student.height}</td>   
              </tr>
            ))
          }
          </tbody>
    
        </table>
      </div>
    )
  }

  export default CohortStudents
