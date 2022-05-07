import {Navbar,NavbarBrand} from "react-bootstrap";

const NavBar = () => {
  return (
    <nav>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <NavbarBrand href="/" className="font-weight-bold">CV Generator App</NavbarBrand>
        </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;
