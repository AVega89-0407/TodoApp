import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import MainTodos from './pages/MainTodos'
import AllTodos from './pages/AllTodos'
import Navbar from './components/Navbar'
import ActiveTodos from './pages/ActiveTodos'
import CompletedTodos from './pages/CompletedTodos'

function App() {

  return (
    <>
      <h1>Todo App</h1>
<Routes>
  <Route path='/' element={<MainLayout />}>
    <Route index element={<MainTodos />} />
    <Route path='/alltodos' element={<AllTodos />} />
    <Route path='/activetodos' element={<ActiveTodos />} />
    <Route path='/completedtodos' element={<CompletedTodos />} />
    <Route path='/navbar' element={<Navbar />} />
  </Route>
</Routes>
    </>
  )
}

export default App
