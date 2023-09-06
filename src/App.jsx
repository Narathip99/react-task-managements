import './App.css'
import Hader from './components/Header'
import AddForm from './components/AddForm'
import Item from './components/Item'
import { useState, useEffect } from 'react'

function App() {
  /* state */
  const[tasks,setTasks] = useState(JSON.parse(localStorage.getItem('tasks'))||[])
  const[title,setTitle] = useState("")
  const[editId,setEditId] = useState(null)
  const[theme,setTheme] = useState("light")

  /* Detect tasks to localstorage and set lacolStorage to defult task array */
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

  function saveTask(e){
    /* add new task */
    e.preventDefault();
    if(!title){
      /* null input */
      alert('title is required')
    }else if(editId){
      /* update */ 
      const updateTask = tasks.map((item)=>{
        /* search from id == id edit */
        if(item.id === editId){
          return {...item,title:title}
        }
        return item;
      })
      setTasks(updateTask)
      setEditId(null)
      setTitle("")
      /* alway set EditId null cuz if not null btn update will be alway show */
    }else{
      /* Add new task */
      const newTask = {
        id: tasks.length+1,
        title: title
      }
      setTasks([...tasks,newTask])
      setTitle("")
    }
  }
  function editTask(id){
    /* edit */
    setEditId(id)
    const editTask = tasks.find((item)=>item.id === id)
    setTitle(editTask.title)
  }
  function deleteTask(id){
    /* delete */
    const result = tasks.filter(item=>item.id !==id)
    setTasks(result)
  }
  return (
    <div className={"App " + theme}>  {/* swap className */}
      <Hader theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId} />
        <section>
          {tasks.map((data)=>(
            <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default App