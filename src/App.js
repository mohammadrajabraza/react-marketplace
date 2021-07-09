import './App.scss';
import { Header, Navigation, Banner, Footer } from './components/index' 
import {Login, Signup, Dashboard, Profile, PostAd} from './views'
import {Switch, Route} from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [activeUser, setActiveUser] = useState({})
  
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
          <Route path="/profile">
            <Profile activeUser={activeUser}/>
          </Route>
          <Route path="/postAd">
            <PostAd activeUser={activeUser}/>
          </Route>
          <Route path="/login">
            <Login activeUser={activeUser} setActiveUser={setActiveUser}/>
          </Route>
          <Route path="/signup">
            <Signup activeUser={activeUser} setActiveUser={setActiveUser}/>
          </Route>
        </Switch>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
