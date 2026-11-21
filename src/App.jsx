import { useState, useEffect, useMemo } from 'react'
import { SettingsContext } from './SettingsContext.js'
import Header from './components/Header.jsx'
import AddStudentForm from './components/AddStudentForm.jsx'
import StudentList from './components/StudentList.jsx'

const startingStudents = [
  { id: 1, name: 'Ana Cruz', grade: 92 },
  { id: 2, name: 'Ben Lim', grade: 85 },
  { id: 3, name: 'Cy Tan', grade: 71 },
]

function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students')
    if (saved) return JSON.parse(saved)
    return startingStudents
  })
  const [search, setSearch] = useState('')
  const [highlight, setHighlight] = useState(() => {
    const saved = localStorage.getItem('highlight')
    if (saved) return JSON.parse(saved)
    return false
  })

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  useEffect(() => {
    localStorage.setItem('highlight', JSON.stringify(highlight))
  }, [highlight])

  function handleAdd(name, grade) {
    setStudents([...students, { id: Date.now(), name, grade }])
  }

  function handleDelete(id) {
    setStudents(students.filter((s) => s.id !== id))
  }

  const visibleStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  const count = students.length
  const average = useMemo(() => {
    if (students.length === 0) return 0
    const total = students.reduce((sum, s) => sum + s.grade, 0)
    return Math.round((total / students.length) * 10) / 10
  }, [students])

  return (
    <SettingsContext value={{ highlight, setHighlight }}>
      <div className="min-h-screen bg-stone-100 text-stone-800">
        <main className="mx-auto max-w-xl px-6 py-10">
          <Header count={count} average={average} />
          <AddStudentForm onAdd={handleAdd} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name"
            className="mb-3 w-full rounded-lg border border-stone-300 bg-white px-3 py-2"
          />
          <StudentList students={visibleStudents} onDelete={handleDelete} />
        </main>
      </div>
    </SettingsContext>
  )
}

export default App