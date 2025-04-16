import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const AddCohort = ({ addNewCohort }) => {
  const navigate = useNavigate()

  const [cohortName, setCohortName] = useState('')
  const [mentor, setMentor] = useState('')
  const [students, setStudents] = useState([
    { name: '', age: '', height: '' },
  ])

  const handleStudentChange = (index, field, value) => {
    const updatedStudents = [...students]
    updatedStudents[index][field] = value
    setStudents(updatedStudents)
  }

  const addStudentField = () => {
    setStudents([...students, { name: '', age: '', height: '' }])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newCohort = {
      id: Date.now(), // generate unique ID
      name: cohortName,
      mentor: mentor,
      students: students,
      studentNum: students.length,
    }

    addNewCohort(newCohort)
    navigate('/cohorts')
  }

  return (
    <motion.div
      className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-200 p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl space-y-6"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-blue-600 text-center">Add New Cohort</h2>

        <div className="space-y-4">
          <div>
            <label className="block font-medium">Cohort Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={cohortName}
              onChange={(e) => setCohortName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium">Mentor Name:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={mentor}
              onChange={(e) => setMentor(e.target.value)}
              required
            />
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg text-gray-700 mb-2">Students</h3>
            {students.map((student, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 bg-gray-50 p-4 rounded shadow-sm"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 border rounded"
                  value={student.name}
                  onChange={(e) => handleStudentChange(index, 'name', e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  className="p-2 border rounded"
                  value={student.age}
                  onChange={(e) => handleStudentChange(index, 'age', e.target.value)}
                  required
                />
                <input
                  type="number"
                  placeholder="Height"
                  className="p-2 border rounded"
                  value={student.height}
                  onChange={(e) => handleStudentChange(index, 'height', e.target.value)}
                  required
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addStudentField}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 transition duration-200"
            >
              + Add Another Student
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Save Cohort
          </button>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default AddCohort
