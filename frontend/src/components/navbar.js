import { Nav, Navbar} from 'react-bootstrap';
import { NavLink as Link } from "react-router-dom";

const DrawNavbar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
    <div class="container">
        <div className="navbar-brand">
            <h1>My Website</h1>
        </div>

        <Navbar.Toggle />

        <Navbar.Collapse>

            <Nav className="ms-auto">

                <Nav.Item>
                    <Link className="nav-link" to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/about">About</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/chess">Chess</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/space">Space</Link>
                </Nav.Item>

            </Nav>
            

        </Navbar.Collapse>



    </div>
    </Navbar>
            );
        }


export default DrawNavbar;