import { Circle, ClipboardText, Trash} from 'phosphor-react';

import styles from '../styles/Tasks.module.css';

interface ITasks {
  tasks: string[];
  onDeletTask: (content:string) => void;
}

export const Tasks = ({ tasks, onDeletTask }: ITasks) => {
  
  const handleDeletTasks = () => {
    onDeletTask(tasks);
  }

  return (
    <>
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
                <div key={item} className={styles.listTasks}>
                  <Circle size={24}/>
                  <strong>{item}</strong>
                  <button onClick={handleDeletTasks}><Trash size={24}/></button>
                </div>
              )
            })}
        </>}
      </main>{/*  */}

    </>
  )
}
