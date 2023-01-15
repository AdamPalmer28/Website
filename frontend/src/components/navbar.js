import { Nav, Navbar} from 'react-bootstrap';

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
                    <a className="nav-link" href="#">Home</a>
                </Nav.Item>
                <Nav.Item>
                    <a className="nav-link" href="#">About</a>
                </Nav.Item>
                <Nav.Item>
                    <a className="nav-link" href="#">Contact</a>
                </Nav.Item>

            </Nav>
            

        </Navbar.Collapse>



    </div>
    </Navbar>
            );
        }


export default DrawNavbar;