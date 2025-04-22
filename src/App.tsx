import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import styles from  './App.module.css'
import Home from './components/home/home'
import Repos from './components/repos/repos'

function App() {
  const router=(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/repos/:login' element={<Repos/>}/> 
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
