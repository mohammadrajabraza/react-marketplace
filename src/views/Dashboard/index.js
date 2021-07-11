import { useState, useEffect } from 'react'
import { getPosts } from '../../config/firebase'
import swal from 'sweetalert'
import {Post} from '../../components'
export default function Dashboard({posts}) {

    // const [posts, setPosts] = useState([])

    
    return <div className="posts-container">
        {posts.map((post, index) => {
            return <Post key={post.id} post={post}/>
        })}
    </div>
}