import { Input } from "./components/Input"
import { Header } from "./components/Header"
import { Task } from "./components/Task"

import { ChangeEvent, FormEvent, useState } from "react"

import { v4 as uuid } from 'uuid'

import styles from "./App.module.sass"


function App() {


 //Get new task through event change and useState
 const [newTask, setNewTask] = useState<string>("")

 function handleNewTask(event: ChangeEvent<HTMLInputElement>) {

   setNewTask(event.target.value)

 }
 ////////////////////////////////////////////////


 //Count created tasks
 const [tasksQty, setTasksQty] = useState(0)

  //Count finished tasks
 const [tasksFinished, setTasksFinished] = useState(0)

  //Function handleAddTask to add the task on the list
 interface TasksProps {
   id: string,
   content: string,
   isFinished: boolean
 }

 const [tasks, setTasks] = useState<TasksProps[]>([]);

 function handleAddTask(event: FormEvent){
   
   const taskData = {
     id: uuid(),
     content: newTask,
     isFinished: false
   }

   event.preventDefault();

   setTasks([...tasks, taskData])
   
   setTasksQty(tasksQty + 1)

   setNewTask("");
 }
 ////////////////////////////////////////////////



 //function to finish the task
 function FinishTask (taskID: string){
  
  const taskIndex = tasks.findIndex(task => task.id === taskID)
   
  tasks[taskIndex].isFinished = !tasks[taskIndex].isFinished

  setTasks([...tasks])

  tasks[taskIndex].isFinished 
  ? setTasksFinished(tasksFinished + 1) : setTasksFinished(tasksFinished -1)

  }

  // OR
  //  const taskListWithFinishTask = tasks.map(task => {
  //    if(task.id === taskID) {
  //     return {
  //        id: task.id,
  //        content: task.content,
  //        isFinished: !task.isFinished
  //     }
  //    }
  //    else {
  //     return task
  //    }
  //  })

  // setTasks(taskListWithFinishTask)

 ////////////////////////////////////////////////


// Function to delete the task
  function DeleteTask(taskID:string){   

    const listWithoutDeleteTask = tasks.filter(task => {     
      return (task.id != taskID) 
    })

    setTasks(listWithoutDeleteTask)

    setTasksQty(tasksQty - 1)

    const tasksFinishedDeleted = listWithoutDeleteTask.reduce((preVal, elem) => preVal + Number(elem.isFinished), 0)
    
    setTasksFinished(tasksFinishedDeleted)

  }
 ////////////////////////////////////////////////

  

  return (
    <>

    <Header/>

    <div className={styles.main}>  
    <Input 
      newTask={newTask} 
      handleNewTask={handleNewTask}
      handleAddTask={handleAddTask}
      countQtyTasks={tasksQty}
      countQtyFinishedTasks={tasksFinished}
    />
    
    {tasks.map(task => {  
      return (
      <Task 
        key={task.id} 
        taskContent={task.content} 
        isFinished={task.isFinished} 
        FinishTask={()=>FinishTask(task.id)}
        DeleteTask={()=>DeleteTask(task.id)}/>)
    })}
    </div>

    </>
  )
}

export default App
