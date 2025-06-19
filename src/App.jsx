import './App.css'
import Navbar from './components/Navbar.jsx'
import Menu from './components/Menu.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Menu />
      <div className='app'>
        <Dashboard />
      </div>
    </>
  )
}

export default App
