import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Task } from './Task';

import styles from './Input.module.sass';

interface InputProps {
  handleNewTask: (event: ChangeEvent<HTMLInputElement>) => void
  handleAddTask: (event: FormEvent<Element>) => void
  newTask: string
  countQtyTasks: number
  countQtyFinishedTasks: number

}

export function Input ({handleNewTask, handleAddTask, newTask, countQtyTasks, countQtyFinishedTasks}:InputProps) {

    //to disable the button
  const isThereInput = newTask.length === 0 


  return(
    <>
    
    <div className={styles.input}>
      
      <input  
        value={newTask}
        onChange={handleNewTask}
        type="text"
        placeholder='Adicione uma nova tarefa'
      />

      <button
        disabled={isThereInput}
        onClick={handleAddTask}
        type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </div>

    <div className={styles.status}>
      <div className={styles.created}>
        Tarefas criadas
        <span className={styles.createdCount}>{countQtyTasks}</span>
      </div>
      <div className={styles.finished}>
        Concluídas
        <span className={styles.finishedCount}>{countQtyFinishedTasks}</span>
      </div>
    </div>


    </>
  )
}