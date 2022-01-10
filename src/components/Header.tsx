import { Container, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React Typescript BootStrap Tutorial</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
