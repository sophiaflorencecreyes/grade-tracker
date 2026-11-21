import Header from './components/Header.jsx'
import StudentRow from './components/StudentRow.jsx'

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <main className="mx-auto max-w-xl px-6 py-10">
        <Header />
        <ul className="overflow-hidden rounded-xl bg-white shadow">
          <StudentRow />
          <StudentRow />
        </ul>
      </main>
    </div>
  )
}

export default App