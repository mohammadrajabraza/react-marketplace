import {Post} from '../../components'
export default function Dashboard({posts}) {

    return <div className="posts-container">
        {posts.map((post) => {
            return <Post key={post.id} post={post}/>
        })}
    </div>
}