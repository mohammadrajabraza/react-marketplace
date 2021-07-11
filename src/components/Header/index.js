import { Link } from 'react-router-dom'
import {Navbar, Container, InputGroup, FormControl, Button} from 'react-bootstrap'
import { AuthNGreet } from '..'
export default function Header(){

    return <>
        <Navbar sticky="top" className="header">
            <Container fluid className="header-items-container">
                <Navbar.Brand>
                    <img src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg"/>
                </Navbar.Brand>
                <div className="item-location-search-container">
                    <select name="location">
                        <option>Karachi</option>
                        <option>Lahore</option>
                    </select>
                </div>
                <div className="item-post-search">
                    <InputGroup className="" >
                    <FormControl
                        placeholder="Find Cars, Mobile Phones and more..."
                        aria-label="Find Cars, Mobile Phones and more..."
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </div>
                <AuthNGreet/>
                <Link to="/postAd">
                    <Button variant="primary" type="button">Post Ad</Button>
                </Link>

            </Container>
        </Navbar>
    </>
}