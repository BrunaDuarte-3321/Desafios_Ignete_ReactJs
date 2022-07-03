import logoRocket from '../assets/rocket.svg';
import styles from '../styles/Header.module.css';
export const Header = () => {

  return (
    <header className={styles.header}>
      <img src={logoRocket} alt="Logo foguete da RocketSeat" />
      <strong>to<span>do</span></strong>
    </header>
  )
}
