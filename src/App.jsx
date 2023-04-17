import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/clients' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
