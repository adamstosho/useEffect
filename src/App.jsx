import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Cohorts from "./pages/Cohorts"
import cohortsData from './data/cohortsData'
import CohortStudents from './pages/CohortStudents'
import AddCohort from './pages/AddCohort'




const App = () => {

  const [cohorts, setCohorts] = useState([]);

  
  const local_Key = "cohorts-data"
  
  useEffect(() => {

    const stored = localStorage.getItem(local_Key) || []

    if (stored?.length) {
      setCohorts(() => JSON.parse(stored))
    }else{
      localStorage.setItem(local_Key, JSON.stringify(cohortsData));
      
      setCohorts(cohortsData)
    }
  }, [])

  
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cohorts' element={<Cohorts cohorts={cohorts}/>}/>
        <Route path='/cohort/:id/' element={<CohortStudents cohorts={cohorts}/>}/>
        <Route path='/add-cohort' element={<AddCohort />} />
      </Routes>

        
    </div>
  )
}

export default App
