import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.css'

const Header = () =>{
  return (
       <>
       <Navbar className={styles.all}bg="dark" data-bs-theme="dark">
       <Container>
         <Navbar.Brand href="/">Shaypado</Navbar.Brand>
         <Nav variant="me-auto">
           <Nav.Link href="/home">Home</Nav.Link>
           <Nav.Link href="/">Landing Page</Nav.Link>
           <Nav.Link href="/login">Login</Nav.Link>
         </Nav>
       </Container>
     </Navbar>
     </>
      
  );
}

export default Header;