import { useState, useEffect} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'


function PostDetails(props) {

    const [posts, setPosts] = useState([])
    const [postIndex, setCurrentPostIndex] = useState(-2)
    const [images, setImages] = ([])
    const {postId} = useParams()


    // getting post from the app component everytime page renders
    useEffect(() => {
        setPosts(props.getPosts())
    }, [props])

    //verifies if the passes id in the params is available
    useEffect(() => {
        if(posts.length > 0){
            setCurrentPostIndex(posts.findIndex((post) => post.id === postId ))
        }        
    },[posts, postId])

    // useEffect(() => {
    //     if(posts.length > 0 && posts[0].imagesUrl !== undefined
    //         && postIndex !== -2 && postIndex !== -1){
    //         let imageArray = posts[postIndex].imagesUrl.map( image => {
    //             return {original : image}
    //         })
    //         setImages(imageArray)
    //         console.log(posts)
    //         console.log(posts[0].imagesUrl)
    //     }
        
    // }, [posts])


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