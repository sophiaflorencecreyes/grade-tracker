import { useState, useEffect, useRef } from 'react'

function AddStudentForm({ onAdd }) {
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem('draft')
    if (saved) return JSON.parse(saved)
    return { name: '', grade: '' }
  })
  const nameRef = useRef(null)

  useEffect(() => {
    const id = setTimeout(() => {
      localStorage.setItem('draft', JSON.stringify(form))
    }, 1000)
    return () => clearTimeout(id)
  }, [form])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.name.trim() === '' || form.grade === '') return
    onAdd(form.name.trim(), Number(form.grade))
    setForm({ name: '', grade: '' })
    nameRef.current.focus()
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        ref={nameRef}
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Student name"
        className="min-w-0 flex-1 rounded-lg border border-stone-300 bg-white px-3 py-2"
      />
      <input
        name="grade"
        type="number"
        min="0"
        max="100"
        value={form.grade}
        onChange={handleChange}
        placeholder="Grade"
        className="w-24 rounded-lg border border-stone-300 bg-white px-3 py-2"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-lg bg-[#8B1C2C] px-4 py-2 font-semibold text-white hover:bg-[#6E1522]"
      >
        Add
      </button>
    </form>
  )
}

export default AddStudentForm