import { ChangeEvent, FormEvent, useState } from 'react';
import {ClipboardText} from 'phosphor-react'
import styles from '../styles/CreateTask.module.css';
import { Tasks } from './Tasks';
export const CreateTask = () => {


  const [tasks, setTasks] = useState<string[]>([

  ])

  const [newTask, setNewTesk] = useState('');

  const handleCreateNewTask = (event:FormEvent) => {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTesk('')
  }
  const handleNewTaskText = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewTesk(event.target.value);
  }

  const deletcontentTask = (contetTask: string) => {

    const deletWithoutTaskOne = tasks.filter(deletTask => {
      return deletTask !== contetTask
    })
    console.log(`vou deletar essa takss ${contetTask}`)
    setTasks(deletWithoutTaskOne)
  }
  return (
    <>
      <form onSubmit={handleCreateNewTask}  className={styles.createTask}>
        <input
          value={newTask}
          onChange={handleNewTaskText}
          type="text"
          placeholder="Crie sua tarefa"

        />
        <button type="submit">Criar</button>
      </form>
      <div className={styles.tasks}>
        <strong>Tarefas Criadas <span>0</span></strong>
        <strong>Concluídas <span>0</span></strong>
      </div>
      {tasks.length <= 0 ?
        (
          <div className={styles.listMain}>
            <div className={styles.content}>
              <ClipboardText size={56}/>
              <p>Você não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seis itens a fazer</span>
            </div>
          </div>
        ) :
        (
            <div className={styles.listTarefa}>
              {tasks.map(task => {
                return  <Tasks deletcontentTask={deletcontentTask} task={task } />
              })}
            </div>
          )}
      <div>
      </div>
    </>
  )
}
