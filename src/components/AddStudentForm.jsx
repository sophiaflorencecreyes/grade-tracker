import { useState } from 'react'

function AddStudentForm({ onAdd }) {
  const [form, setForm] = useState({ name: '', grade: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.name.trim() === '' || form.grade === '') return
    onAdd(form.name.trim(), Number(form.grade))
    setForm({ name: '', grade: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
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
