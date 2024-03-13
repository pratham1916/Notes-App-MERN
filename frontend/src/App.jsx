import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App
