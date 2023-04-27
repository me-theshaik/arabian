import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Container>
      <Nav>
        <Logo src="./images/logo.png" alt="Logo" />
        <MenuButton onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MenuButton>
        <NavList isOpen={isMenuOpen}>
            <NavLink to="/" onClick={toggleMenu}>
              HOME
            </NavLink>
            <NavLink to="/contest" onClick={toggleMenu}>
              CONTEST
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu}>
              ABOUT
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>
              CONTACT
            </NavLink>
            <NavLink to="/guidelines" onClick={toggleMenu}>
              GUIDELINES
            </NavLink>
          </NavList>
          <SubmitButton to="/contest" >Submit Application</SubmitButton>
      </Nav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  z-index: 111;
  display: flex;
  flex-direction: column;
  width: 100vw
`

const Nav = styled.nav`
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: none;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const MenuButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    span {
      display: block;
      width: 100%;
      height: 3px;
      margin-bottom: 5px;
      background-color: #333;
      border-radius: 5px;
      transform-origin: center;
      transition: transform 0.3s;
    }

    span:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    span:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
    }

    span:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    flex-direction: column;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: left 0.3s;

}
`;
const NavLink = styled(Link)`
/* color: #333; */
color: #c2272d ;
text-decoration: none;
font-size: 16px;
font-weight: 600;
padding: 10px;
border-radius: 5px;
transition: background-color 0.3s;

&:hover {
color: #ffffff;
background-color: #c2272d;
}

@media screen and (max-width: 768px) {
font-size: 20px;
padding: 15px;
text-align: center;
width: 100%;
}
`;

const SubmitButton = styled(Link)`
color: #ffffff;
background-color: #c2272d;
text-decoration: none;
border: none;
border-radius: 5px;
font-size: 16px;
font-weight: 600;
padding: 10px 20px;
cursor: pointer;
transition: background-color 0.3s;
justify-content: center;

&:hover {
background-color: #e44d52;
}

@media screen and (max-width: 768px) {
margin-top: 20px;
width: 100%;
}
`;
