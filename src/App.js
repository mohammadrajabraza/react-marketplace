import './App.scss';
import { Header, Navigation, Banner, Footer } from './components/' 
import { Login, Signup, Dashboard, Profile, PostAd, PostDetails } from './views'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react';
import { getPosts } from './config/firebase'
import { useDispatch } from 'react-redux';
import { setAllPosts } from './store/actions/posts'
import swal from 'sweetalert';

function App() {

  let match = useRouteMatch()
  const dispatch = useDispatch()  

  const fetchPostsFromDB = async () => {
    try{
      const posts_result =  await getPosts()
      const tempPost = []
      posts_result.forEach(post => {
        tempPost.push({...post.data(), id: post.id})
      })
      dispatch(setAllPosts(tempPost))
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
              <PostDetails/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/postAd">
            <PostAd/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/">
            <Dashboard/>
          </Route>
        </Switch>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
