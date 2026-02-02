import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import MyDay from "./pages/MyDay";
import AllTodos from "./pages/AllTodos";
import ActiveTodos from "./pages/ActiveTodos";
import CompletedTodos from "./pages/CompletedTodos";
import NotFound from "./pages/NotFound";
import SideBar from "./pages/SideBar";
import CalenderPage from "./pages/CalenderPage";
import TodoHeader from "./components/TodoHeader";
import Home from "./pages/Home";

function App() {
  
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    
    setTodos([...todos, { text, completed: false }]);
  }

  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }
  return (
    <>
    <TodoHeader />
    <div className="layout">
      <aside>
        <SideBar todos={todos} addTodo={addTodo}/>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

            <Route path="/alltodos" element={<AllTodos
            todos={todos}
            addTodo={addTodo} 
            removeTodo={removeTodo}
             />} />

            <Route path="/activetodos" element={<ActiveTodos 
            todos={todos.filter(t => !t.completed)}
                removeTodo={removeTodo}
                />} />

            <Route path="/completedtodos" element={<CompletedTodos
            todos={todos.filter(t => t.completed)}
                removeTodo={removeTodo}
               />} />
               <Route path="/calenderpage" element={<CalenderPage todos={todos}/>} />
               <Route path="/myday" element={<MyDay />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </aside>
      </div>
    </>
  );
}

export default App;
