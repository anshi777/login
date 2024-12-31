import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Components/RegisterForm'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'

function App() {

  return (
    
       <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />

      </Routes>
      </BrowserRouter>
    
  )
}

export default App
