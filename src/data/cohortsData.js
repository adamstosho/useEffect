const studentsCohortRanger = [
  {name: "Feranmi", age: 20, height: 4.5},
  {name: "Idris", age: 25, height: 5},
  {name: "Muiz", age: 28, height: 6},
  {name: "Kabeer", age: 30, height: 7},
  {name: "Lateefah", age: 27, height: 6},
  {name: "Abdullah", age: 25, height: 8},
  {name: "Dolapo", age: 24, height: 4.5},
  {name: "Ridwan", age: 19, height: 8},
  {name: "Damilare", age: 29, height: 7}
]

const studentsCohortIdan = [
  {name: "Zainab", age: 15, height: 5},
  {name: "Soliu", age: 13, height: 5.5},
  {name: "Mubarak", age: 24, height: 8},
  {name: "Habeeb", age: 15, height: 6},
  {name: "Dolapomi", age: 23, height: 6},
  {name: "Usman", age: 18, height: 8},
  {name: "Summayah", age: 24, height: 7},
]

const cohortsData = [
  {
    id: 1, 
    name: "Ranger", 
    mentor: "Raji",
    students: studentsCohortRanger, 
    studentNum: studentsCohortRanger.length},

    {
      id: 2, 
      name: "Idan", 
      mentor: "Idress",
      students: studentsCohortIdan, 
      studentNum: studentsCohortIdan.length},

]



export default cohortsData