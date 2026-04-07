import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import styles from './App.module.css'

function App() {
  

  return (
    <>
      <Navbar></Navbar>

      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
