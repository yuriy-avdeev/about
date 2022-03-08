import { Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import PageNotFound from '../PageNotFound/PageNotFound'

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/about'>
          <Main />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
