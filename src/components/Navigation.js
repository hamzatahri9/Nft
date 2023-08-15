import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";

const bgBlackGradient = `
  background: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
`;

const Section = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body};
  ${bgBlackGradient}
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
  ${bgBlackGradient} /* Apply the black gradient background */
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: white;
  cursor: pointer;

  &::after {
    content: ' ';
    display: block;
    width: 0; /* Changed from 100% to 0 */
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Fixed the timing function */
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button text="Connect Wallet" link="https://google.com" />
      </NavBar>
    </Section>
  );
};

export default Navigation;
