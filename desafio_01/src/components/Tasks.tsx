import styles from '../styles/Tasks.module.css';
import { Trash, Circle, Check } from 'phosphor-react';
import { useState } from 'react';

interface ITask{
  task: string;
  deletcontentTask: (contentDelet: string) => void;
  handleCountConcluded: (concluded: boolean) => void;

}
export const Tasks = ({ task, deletcontentTask, handleCountConcluded }: ITask) => {

  const [checkTask, setCheckTask] = useState(false)

  const handleDeletTask = () => {
    deletcontentTask(task);
  }

  const validateTask = () => {
    if (!checkTask) {
      setCheckTask(true)
      handleCountConcluded(checkTask)

    }
    else {
      setCheckTask(false)
      handleCountConcluded(checkTask)
    }
  }

  return (
     <>
      <main>
        <div className={styles.listTasks}>
          <div className={!checkTask ? styles.circle : styles.circleCheck}>
            <button onClick={validateTask}>

              {!checkTask ? (
                <Circle size={17.45}/>
              ): <Check size={14} />}
            </button>
          </div>
          {checkTask ? (
            <strong className={styles.lineCheck}>{task}</strong>
          ):<strong>{task}</strong>}

          <div className={styles.trash}>
            <button onClick={handleDeletTask} title='Deletar tarefa'>
            <Trash size={17.45} />
          </button>
          </div>
        </div>
      </main>
    </>
  )
}
