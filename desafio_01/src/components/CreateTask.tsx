import { Circle, PlusCircle} from 'phosphor-react';
import { ChangeEvent, FormEvent, HTMLInputTypeAttribute, useState } from 'react';
import { ClipboardText, Trash  } from 'phosphor-react';

import styles from '../styles/CreateTask.module.css';
import { Tasks } from './Tasks';

export const CreateTask = () => {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTasks] = useState('')

  const newTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewTasks(event.target.value)
  }
  const handleTasks = (event:FormEvent) => {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTasks('');
  }
  const deletTask = (contentToDelet: string) => {
    const commentWithoutDeletOne = tasks.filter((content) => {
      return content !== contentToDelet;
    })
    console.log('cliquei')
    setTasks(commentWithoutDeletOne)
  }
  return (
    <>
      <form
        onSubmit={handleTasks}
        className={styles.createTask}
      >
        <input
          value={newTask}
          onChange={newTaskChange}
          type="text"
        />
        <button type='submit'  >
          Criar
          <PlusCircle/>
        </button>
      </form>
      <Tasks tasks={tasks} onDeletTask={deletTask}/>
    </>

  )
}
