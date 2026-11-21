function StudentRow({ name, grade }) {
  return (
    <li className="flex items-center gap-3 border-b border-stone-200 px-5 py-3">
      <span className="flex-1">{name}</span>
      <b className="text-lg">{grade}</b>
    </li>
  )
}

export default StudentRow