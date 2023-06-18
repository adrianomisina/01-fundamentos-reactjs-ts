import Post from "./components/Post"
import { PostType } from "./components/Post";
import Sidebar from "./components/Sidebar"
import Header from './components/Header';
import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id:1,
    author: {
      name: 'Adriano Misina',
      role: 'Frontend UX | UI Developer',
      avatarUrl: 'https://avatars.githubusercontent.com/u/65734814?v=4'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      {type: 'link', content:'adriano.misina@gmail.com' },
    ],
    publishedAt: new Date('2023-06-16 09:00:00')

  },

  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋', },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      {type: 'link', content:'adriano.misina@gmail.com' },
    ],
    publishedAt: new Date('2023-06-15 08:00:00'),
  }
]

const App = () => {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((post) => (
            <Post post={post}/>
          )) }
        </main>
      </div>
    </div>
  )
}

export default App