import { useContext } from 'react'
import { SettingsContext } from '../SettingsContext.js'

function Header({ count, average }) {
  const { highlight, setHighlight } = useContext(SettingsContext)

  let label = 'Highlight below 75'
  if (highlight) label = 'Stop highlighting'

  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-[#8B1C2C]">BSIT 2-A Grades</h1>
      {count > 0 && (
        <p className="text-stone-500">
          {count} students · Class average {average}
        </p>
      )}
      <button
        type="button"
        onClick={() => setHighlight(!highlight)}
        className="mt-2 cursor-pointer text-sm text-[#8B1C2C] underline"
      >
        {label}
      </button>
    </header>
  )
}

export default Header