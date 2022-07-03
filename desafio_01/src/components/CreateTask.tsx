import { Circle, PlusCircle} from 'phosphor-react';
import { ChangeEvent, FormEvent, HTMLInputTypeAttribute, useState } from 'react';
import { ClipboardText, Trash  } from 'phosphor-react';

import styles from '../styles/CreateTask.module.css';

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
      <aside className={styles.tasks}>
        <strong>Tarefas Criadas <span>0</span></strong>
        <strong>Concluídas <span>0</span></strong>
      </aside>
      <main className={tasks.length === 0 ? styles.listMain : styles.listTarefa } >
        {tasks?.length === 0 ? (
          <div className={styles.content}>
          <ClipboardText size={56}/>
          <p>Você não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seis itens a fazer</span>
        </div>
        ) : <>
            {tasks.map((item) => {
              return (
                <div className={styles.listTasks}>
                  <Circle size={24}/>
                  <strong>{item}</strong>
                  <Trash size={24}/>
                </div>
              )
            })}
        </>}
      </main>
    </>

  )
}
