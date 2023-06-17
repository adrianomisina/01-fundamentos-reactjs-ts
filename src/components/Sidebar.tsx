import Avatar from './Avatar'
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <img 
          src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
          className={styles.cover}
        />
          
        <div className={styles.profile}>
          <Avatar hasBorder={true} src='https://avatars.githubusercontent.com/u/65734814?v=4'/>
          <strong>Adriano Misina</strong>
          <span>Frontend UX | UI Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
    </div>
  )
}

export default Sidebar