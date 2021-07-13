import {Post} from '../../components'
import { useSelector } from 'react-redux'
export default function Dashboard() {

    const posts = useSelector((state => state.posts))
    
    return <div className="posts-container">
        {posts.map((post) => {
            return <Post key={post.id} post={post}/>
        })}
    </div>
}