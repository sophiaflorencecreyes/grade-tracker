import { useState } from 'react'
import Header from './components/Header.jsx'
import StudentList from './components/StudentList.jsx'

const startingStudents = [
  { id: 1, name: 'Ana Cruz', grade: 92 },
  { id: 2, name: 'Ben Lim', grade: 85 },
  { id: 3, name: 'Cy Tan', grade: 71 },
]

function App() {
  const [students, setStudents] = useState(startingStudents)

  function handleDelete(id) {
    setStudents(students.filter((s) => s.id !== id))
  }

  const count = students.length
  let average = 0
  if (count > 0) {
    const total = students.reduce((sum, s) => sum + s.grade, 0)
    average = Math.round((total / count) * 10) / 10
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <main className="mx-auto max-w-xl px-6 py-10">
        <Header count={count} average={average} />
        <StudentList students={students} onDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App