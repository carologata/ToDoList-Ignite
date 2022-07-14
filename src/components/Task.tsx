import { CheckCircle, Circle, FastForwardCircle, Trash } from 'phosphor-react'
import styles from './Task.module.sass'


interface TaskProps {
  isFinished: boolean
  taskContent: string
  FinishTask: ()=>void
  DeleteTask: ()=>void
}

export function Task({isFinished, FinishTask, taskContent, DeleteTask}:TaskProps) {
  
 
  return(
    <div className={styles.task}>

      <div className={styles.container}>
      {isFinished 
      ?
      <button 
        onClick={FinishTask}
        className={styles.done}>
        <CheckCircle size={24} weight="fill"/>
      </button>
      :
      <button 
        onClick={FinishTask}
        className={styles.option}>
        <Circle size={24}/>
      </button>
      }   

      <p 
        className={isFinished ?styles.lineContent :styles.content}>
        {taskContent}
      </p>
      </div>

      <button
      onClick={DeleteTask} 
      className={styles.delete}>
        <Trash size={24} />
      </button>

    </div>
  )
}