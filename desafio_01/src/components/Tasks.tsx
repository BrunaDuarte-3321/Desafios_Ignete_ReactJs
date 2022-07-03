import { useState } from 'react';
import { CreateTask } from './CreateTask';


import styles from '../styles/Tasks.module.css';


export const Tasks = (content: string) => {

  const [tasks, setTasks] = useState<string>()

  return (
    <>
      <p>{content}</p>

    </>
  )
}
