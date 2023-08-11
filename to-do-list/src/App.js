import { useState,useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import TodoList from './components/TodoList';
import AddForm from './components/AddForm';
import Footer from './components/Footer'
import About from './components/About'
import TodoDetail from './components/TodoDetail';


function App() {

  const [todoList,setTodoList]=useState([])

  const [showAddForm,setShowAddForm]=useState(false)

  useEffect(()=>{
    axios.get('http://localhost:5000/todos')
  .then(function (response) {
    setTodoList(response.data);
  })
  },[])

  const showForm=()=>{
    setShowAddForm(!showAddForm)
  }


  const deleteTodo=(id)=>{

    axios.delete(`http://localhost:5000/todos/${id}`).then(()=>{
      setTodoList(todoList.filter((todo)=>{
          return todo.id !== id
      }))
    })
  }

  const toggleReminder=(todo)=>{

    axios.patch(`http://localhost:5000/todos/${todo.id}`,{
      reminder: !todo.reminder
    }).then(()=>{
      setTodoList(
        todoList.map((td)=>
          td.id === todo.id ? {...td, reminder: !td.reminder} : td
        )
      )
    })

    setTodoList(
      todoList.map((td)=>
        td.id === todo.id ? {...td, reminder: !td.reminder} : td
      )
    )
  }

  const addTodo=(todo)=>{
    axios.post('http://localhost:5000/todos',{
      title: todo.title,
      day: todo.day,
      reminder: todo.reminder
    }).then((res)=>{
      setTodoList([...todoList,res.data])
    })
  }

  return (
    <Router>
      <div className="container">
        
        <Header onAddBtnClick={showForm} btnToggle={showAddForm}/>

        <Routes>
          <Route path='/' element={
            <>
              {showAddForm && <AddForm onAdd={addTodo}/>}
              {todoList.length>0 ? <TodoList todoList={todoList} onDelete={deleteTodo} onToggle={toggleReminder}/> : 'No tasks to show'}
            </>
          }></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/todoDetail/:id' element={<TodoDetail/>}></Route>
        </Routes>

        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
