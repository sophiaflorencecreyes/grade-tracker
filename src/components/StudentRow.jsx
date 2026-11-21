import { useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function StudentRow({ id, name, grade, onDelete }) {
  const { highlight } = useContext(SettingsContext)

  let rowClass = 'flex items-center gap-3 border-b border-stone-200 px-5 py-3'
  if (highlight && grade < 75) {
    rowClass = 'flex items-center gap-3 border-b border-stone-200 bg-red-50 px-5 py-3'
  }

  return (
    <li className={rowClass}>
      <span className="flex-1">{name}</span>
      {grade < 75 && (
        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
          Below 75
        </span>
      )}
      <b className="text-lg">{grade}</b>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="cursor-pointer text-2xl leading-none text-stone-400 hover:text-[#8B1C2C]"
      >
        ×
      </button>
    </li>
  )
}

export default StudentRow