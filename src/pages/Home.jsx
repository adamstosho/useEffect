import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-50"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="border border-blue-200 p-10 rounded-2xl shadow-lg bg-white w-[90%] max-w-md text-center"
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-blue-600 text-3xl font-extrabold mb-6">Cohort Manager</h1>

        <div className="flex justify-center gap-6">
          <Link to="/cohorts">
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
              View Cohorts
            </button>
          </Link>

          <Link to="/add-cohort">
            <button className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-200">
              Add Cohorts
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
