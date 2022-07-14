import styles from './Header.module.sass'
import Logo from '../assets/logo.png'

export function Header(){
  return (
    <>
    <div className={styles.logo}>
      <img src={Logo} alt="To Do Logo"/>
    </div>
    </>
  )
}