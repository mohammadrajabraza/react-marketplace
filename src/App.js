import './App.scss';
import { Header, Navigation, Banner, Footer } from './components/' 
import {Login, Signup, Dashboard, Profile, PostAd, PostDetails} from './views'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import { useState, useEffect } from 'react';
import {getPosts} from './config/firebase'
import swal from 'sweetalert';

function App() {

  let match = useRouteMatch()
  const [activeUser, setActiveUser] = useState({})
  const [posts, setPosts] = useState([])
  
  const getPostsForComponent = () => {
    return posts
  }

  const fetchPostsFromDB = async () => {
    try{
        const posts_result =  await getPosts()
        const tempPost = []
        posts_result.forEach(post => {
            tempPost.push({...post.data(), id: post.id})
        })
        setPosts(tempPost)
        console.log(tempPost)
    }
    catch(e){
        const {code, message} = e
        swal({
            title: code,
            text: message,
            icon: "error",
            dangerMode: true
        })
    }
}
    useEffect(() => {
        fetchPostsFromDB()
    }, [])

  return (
    <div className="app">
      <Header/>
      <Navigation/>
      <Banner/>
      <div className="body-container">
        <Switch>
          <Route path={`${match.path}posts/:postId`}>
              <PostDetails getPosts={getPostsForComponent}/>
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
          <Route exact path="/">
            <Dashboard posts={posts}/>
          </Route>
        </Switch>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
