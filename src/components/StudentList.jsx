import StudentRow from './StudentRow.jsx'

function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return (
      <p className="rounded-xl bg-white px-5 py-8 text-center text-stone-500 shadow">
        No students to show.
      </p>
    )
  }

  return (
    <ul className="overflow-hidden rounded-xl bg-white shadow">
      {students.map((s) => (
        <StudentRow
          key={s.id}
          id={s.id}
          name={s.name}
          grade={s.grade}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default StudentList