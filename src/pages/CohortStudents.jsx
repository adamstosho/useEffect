import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const CohortStudents = ({ cohorts }) => {
  const { id } = useParams()
  const [students, setStudents] = useState([])

  useEffect(() => {
    if (students.length) return

    const parsedNum = parseInt(id)
    const filteredCohort = cohorts?.filter((cohort) => cohort.id === parsedNum)

    if (filteredCohort.length)
      setStudents(filteredCohort[0]?.students)
  }, [cohorts.length, id, students.length])

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-blue-50 py-10 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Cohort Students List
        </h2>

        {students.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700 text-center">
              <thead className="bg-blue-300 text-gray-800 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-3">S/N</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Age</th>
                  <th className="px-6 py-3">Height</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map((student, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition duration-150">
                    <td className="px-4 py-2 font-bold text-red-700">{index + 1}</td>
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">{student.age}</td>
                    <td className="px-4 py-2 text-green-600 font-semibold">{student.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No students found for this cohort.</p>
        )}
      </div>
    </motion.div>
  )
}

export default CohortStudents
