import './App.scss';
import { Header, Navigation, Banner, Footer } from './components/index' 
import {Login, Signup, Dashboard} from './views'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header/>
      <Navigation/>
      <Banner/>
      <div className="body-container">
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
