import React from 'react'
import {useSelector} from 'react-redux'
import {Nav,NavDropdown,Navbar,Container,Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../images/logo.png'
import { useLogoutUserMutation } from '../services/appApi'

function Navigation() {
  const{ user }= useSelector((state)=>state.user)
  const [logoutUser,{isLoading}] = useLogoutUserMutation()
  function handleLogout(){
    logoutUser().then(({error})=>{
      if(!error){
        console.log('logged out!')
      }
    })
  }
  return (
    <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand> <img src={logo} style={{width:40}}/> M </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Login">
                      <Nav.Link className='btn btn-primary text-white'>Login</Nav.Link>
                    </LinkContainer>
                    {user && (
                      <NavDropdown title={user.email} id="basic-nav-dropdown">
                        <linkContainer to ="/new-article">
                          <NavDropdown.Item >New article</NavDropdown.Item>
                        </linkContainer>
                        <linkContainer to ="/my-article">
                          <NavDropdown.Item >My article</NavDropdown.Item>
                        </linkContainer>
                        <NavDropdown.Divider/>
                            <NavDropdown.Item ><Button onClick={handleLogout} variant = "outlined-danger">Log out</Button></NavDropdown.Item>
                      </NavDropdown>
                    )}
                </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation