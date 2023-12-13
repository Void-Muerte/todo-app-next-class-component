import TodoApp from '@/src/components/TodoApp'
import '../src/css/styles.css'
import styles from './page.module.css'
import Header from '@/src/components/Header'


export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <TodoApp />
    </div>
  )
}
