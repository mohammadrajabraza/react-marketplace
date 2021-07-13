import { useState, useEffect} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import {useSelector} from 'react-redux'


function PostDetails() {

    const posts = useSelector(state => state.posts)
    const [postIndex, setCurrentPostIndex] = useState(-2)
    const {postId} = useParams()

    //verifies if the passes id in the params is available
    useEffect(() => {
        if(posts.length > 0){
            setCurrentPostIndex(posts.findIndex((post) => post.id === postId ))
        }        
    },[posts, postId])

    return ( 
        posts.length > 0 && postIndex !== -2 && postIndex !== -1 ?
        ( 
            <div className="post-details-container">
                <ImageGallery className="post-details-image-grid" items={posts[postIndex].imagesUrl.map(image => ({original: image, thumbnail: image}))}/>
                <h2>Title: {posts[postIndex].title}</h2>
                <h3>Price: {posts[postIndex].price}</h3> 
            </div>
        )   
        :
        (postIndex === -1 ?
            <Redirect to="/posts"/> :
            <div>No data available</div>
        )
    
    )
}

export default PostDetails