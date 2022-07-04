import styles from '../styles/Tasks.module.css';
import { Trash, Circle } from 'phosphor-react';

interface ITask{
  task: string;
  deletcontentTask: (contentDelet: string) => void
}
export const Tasks = ({ task, deletcontentTask }:ITask) => {

  const handleDeletTask = () => {
    deletcontentTask(task)
  }
  return (
    <>
      <main>
        <div className={styles.listTasks}>
          <button><Circle size={24} /></button>
          <strong>{task}</strong>
          <button onClick={handleDeletTask} title='Deletar tarefa'>
            <Trash size={24} />
          </button>
        </div>
      </main>
    </>

  )
}
