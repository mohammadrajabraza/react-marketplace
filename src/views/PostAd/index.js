import { Container, Form, Button} from 'react-bootstrap'
import  {useState} from 'react'
import { Redirect } from 'react-router-dom'
import {storeImages, addPost} from '../../config/firebase'
import swal from 'sweetalert'
import { useSelector, useDispatch} from 'react-redux'
import { setPost } from '../../store/actions/posts'

export default function PostAd() {

    const activeUser = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [fileKey, setFileKey] = useState(true)
    const [images, setImages] = useState([])
    const [URLs, setURLs] = useState([])
    
    const resetFeilds = () => {
        setTitle('')
        setPrice('')
        setFileKey(!fileKey) 
    }
    
    const saveImages = async () => {
        try{
            const urls = await storeImages(images)
            setURLs(urls)
        }
        catch(e) {
            const {code, message} = e
            swal({
                title: code,
                text: message,
                icon: "error",
                dangerMode: true
            })
        }
    }

    const createAd = async (e) => {
        e.preventDefault()
        try {
            await saveImages()
            await addPost(activeUser.id, title, price, URLs)
            dispatch(setPost({
                user_id: activeUser.id,
                title,
                price,
                imagesUrl: URLs
            }))
            swal({
                title: "Operation Successful",
                text: "Post added successfully!",
                icon: 'success'
            })
            resetFeilds()
        }
        catch(e){
            const {code, message} = e
            swal({
                title: code,
                text: message,
                icon: 'error',
                dangerMode: true
            })
        }

    } 

    return Object.keys(activeUser).length === 0 ?
            <Redirect to="/login"/> :
            <div className="form-container">
                <Container>
                    <Form onSubmit={createAd}>
                    <h1 > Post Your Ad </h1>

                        <Form.Group controlId="postAdTitle" >
                            <Form.Label>Ad title</Form.Label>
                            <Form.Control type="text" 
                                value={title} onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="postAdPrice" >
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" 
                                value={price} onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="PostImage" >
                            <Form.File id="PostImages" label="Ad Images" multiple
                            key={fileKey} onChange={(e) => setImages(e.target.files)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Post Ad
                        </Button>
                    </Form>
                </Container>
            </div>

}