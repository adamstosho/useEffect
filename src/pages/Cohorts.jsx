import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Cohorts = ({ cohorts }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      className="min-h-screen bg-blue-50 py-10 px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-blue-600 text-center font-mono font-extrabold text-3xl mb-8">
        All Cohorts
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {cohorts?.map((cohort) => (
          <motion.div
            key={cohort?.id}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 ease-in-out"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-blue-500 font-bold text-lg mb-2">
              Cohort Name: {cohort.name}
            </h2>
            <ul className="mb-4 text-gray-700 text-sm space-y-1">
              <li>Mentor: {cohort.mentor}</li>
              <li>Total Students: {cohort.studentNum}</li>
            </ul>
            <button
              onClick={() => navigate(`/cohort/${cohort?.id}`)}
              className="w-full py-2 bg-orange-500 rounded-xl hover:bg-orange-600 text-white font-semibold text-sm transition-all"
            >
              View Students
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Cohorts
