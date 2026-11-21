import StudentRow from './StudentRow.jsx'

function StudentList({ students }) {
  return (
    <ul className="overflow-hidden rounded-xl bg-white shadow">
      {students.map((s) => (
        <StudentRow key={s.id} name={s.name} grade={s.grade} />
      ))}
    </ul>
  )
}

export default StudentList