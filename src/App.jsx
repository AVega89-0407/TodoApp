import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import MainTodos from './pages/MainTodos'
import AllTodos from './pages/AllTodos'
import Navbar from './components/Navbar'
import ActiveTodos from './pages/ActiveTodos'
import CompletedTodos from './pages/CompletedTodos'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<MainLayout />}>
    <Route index element={<MainTodos />} />
    <Route path='/alltodos' element={<AllTodos />} />
    <Route path='/activetodos' element={<ActiveTodos />} />
    <Route path='/completedtodos' element={<CompletedTodos />} />
    <Route path='/navbar' element={<Navbar />} />
  </Route>

  <Route path='*' element={<NotFound />} />
</Routes>
    </>
  )
}

export default App
