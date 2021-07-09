import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'
function Login() {

    return <div className="auth-container">
                <Container>
                    <Form>
                        <h1 > Login</h1>
                        <Form.Group controlId="formBasicUsername" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Row>
                            <Col className="text-right">
                                <Link to="/signup">Not Registered? Signup here</Link>
                            </Col>
                        </Row>
                        <Button variant="primary" type="button">
                            Login
                        </Button>
                    </Form>
                </Container>
            </div> 
    }

export default Login