import './App.scss'
import { Login } from './Components/Login/Login'
import { SignUp } from './Components/SignUp/SignUp'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
