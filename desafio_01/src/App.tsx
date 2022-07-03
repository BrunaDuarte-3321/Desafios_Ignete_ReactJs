import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import styles from './styles/App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.app}>
       <CreateTask/>
      </div>
    </>
  )
}

export default App
