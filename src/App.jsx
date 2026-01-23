import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import MainTodos from './pages/MainTodos'
import AllTodos from './pages/AllTodos'

function App() {

  return (
    <>
      <h1>Todo App</h1>
<Routes>
  <Route path='/' element={<MainLayout />}>
    <Route index element={<MainTodos />} />
    <Route path='/alltodos' element={<AllTodos />} />
  </Route>
</Routes>
    </>
  )
}

export default App
