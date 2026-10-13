import './App.css'
import Navbar from './Common/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09090f] text-slate-100">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
