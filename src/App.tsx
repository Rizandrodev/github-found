import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import styles from  './App.module.css'
import Home from './components/home/home'

function App() {
  const router=(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )

  return (
    <div className={styles.app}>
      <h1>Github Found</h1>
      {router}
    </div>
  )
}

export default App
