import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import {ClipboardText, PlusCircle} from 'phosphor-react'
import styles from '../styles/CreateTask.module.css';
import { Tasks } from './Tasks';
export const CreateTask = () => {

  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTesk] = useState('');
  const [countTask, setCountTask] = useState(0);

  const [countConcluded, setCountConcluded] = useState(0)

  const countNewTask = () => {
    setCountTask(tasks.length + 1);
  }

  const handleCountConcluded = (event: boolean) => {
    if (event ) {
      setCountConcluded(countConcluded -1)
    }
    else {
       setCountConcluded(countConcluded + 1)
    }

  }

  const handleCreateNewTask = (event:FormEvent) => {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTesk('')

  }
  const handleNewTaskText = (event:ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setNewTesk(event.target.value);
  }
  const deletcontentTask = (contetTask: string) => {
    const deletWithoutTaskOne = tasks.filter(deletTask => {
      return deletTask !== contetTask
    })
    setTasks(deletWithoutTaskOne);
    setCountTask(tasks.length - 1)

    if (countConcluded >= 0) {
      setCountConcluded(countConcluded -1 )
    }

  }

  const handleTaskInvalid = (event:InvalidEvent<HTMLInputElement>) => {

    event.target.setCustomValidity('Esté campo é obrigatório!')
  }

  const isNewTaskEmpty = newTask.length === 0;
  return (
    <>
      <form onSubmit={handleCreateNewTask}  className={styles.createTask}>
        <input
          value={newTask}
          onChange={handleNewTaskText}
          type="text"
          placeholder="Adicona uma nova tarefa"
          onInvalid={handleTaskInvalid}
          required

        />
        <button
          onClick={countNewTask}
          type="submit"
          disabled={isNewTaskEmpty}
        >

          Criar
          <PlusCircle size={16}/>
        </button>
      </form>
      <div className={styles.tasks}>
        <strong>Tarefas Criadas <span>{countTask }</span></strong>
        <strong>Concluídas <span>{countConcluded }</span></strong>
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
                return <Tasks handleCountConcluded={handleCountConcluded}   deletcontentTask={deletcontentTask} task={task } />
              })}
            </div>
          )}
      <div>
      </div>
    </>
  )
}
