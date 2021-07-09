import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
import {useState} from 'react'
import {login, getUser} from '../../config/firebase'
import swal from 'sweetalert'
function Login({activeUser, setActiveUser}) {


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
    const fetchAuthorizedUser = async () => {

        try {
            let user = await getUserById()
            console.log('from login screen',user)
            swal({
                title: 'Operation Successful',
                text: 'User login successfully!',
                icon: "success"
            })
            setActiveUser(user)
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

    const signIn = async (e) => {
        e.preventDefault()
        try{
            let result = await login(email, password)
            user_id = result.user.uid
            console.log('User in signin', user_id)
            fetchAuthorizedUser()
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

    return activeUser && Object.keys(activeUser).length !== 0 ?
            <Redirect to="/"/> :
            <div className="auth-container">
                <Container>
                    <Form onSubmit={signIn}>
                        <h1 > Login</h1>
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
                                <Link to="/signup">Not Registered? Signup here</Link>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Container>
            </div> 
    }

export default Login