import './App.scss'
import { Login } from './Components/Login/Login'
import { SignUp } from './Components/SignUp/SignUp'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Menu } from './Pages/Menu'
import { Task } from './Components/Task/Task'
import { Notes } from './Components/Notes/Notes'
import { Navbar } from './Common/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/tasks' element={<Task />}></Route>
          <Route path='/notes' element={<Notes />}></Route>
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App
