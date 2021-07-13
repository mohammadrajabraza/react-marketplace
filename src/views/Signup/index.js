import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
import {useState} from 'react'
import { register, addUser, getUser } from '../../config/firebase'
import swal from 'sweetalert'
import {useDispatch, useSelector} from 'react-redux'
import {setActiveUser} from '../../store/actions/users'


function Signup() {
   
    const activeUser = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [fullName, setFullName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let user_id;
    
    const getUserById = async () => {
        let user;
        try{
            user = await getUser(user_id)
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
        return user
    }
    
    const createUser = async () => {
        try {
            await addUser(user_id, fullName, email, contact)
            let user = await getUserById()
            swal({
                title: 'Operation Successful',
                text: 'User registered successfully!',
                icon: "success"
            })
            dispatch(setActiveUser(user))
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

    const signup = async (e) => {
        e.preventDefault()
        try {
            const result = await register(email, password)
            user_id = result.user.uid
            createUser()
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

    const resetFeilds = () => {
        setContact('')
        setEmail('')
        setFullName('')
        setPassword('')
    }
    
    return activeUser && Object.keys(activeUser).length !== 0 ?
            <Redirect to="/"/> :
            <div className="auth-container">
                <Container>
                    <Form onSubmit={signup}>
                    <h1 > Sign Up</h1>

                        <Form.Group controlId="signupFullName" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter full name" 
                                value={fullName} onChange={(e) => setFullName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="signupContact" >
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" placeholder="Enter contact" 
                                value={contact} onChange={(e) => setContact(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="signupEmail" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="signupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" 
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Row>
                            <Col className="text-right">
                                <Link to="/login">Already Registered? Login here</Link>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Container>
            </div> 
    }

export default Signup