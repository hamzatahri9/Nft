import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const LogoText = styled.h1`
font-family: 'Akaya-telivigala', cursive;
font-size: ${props => props.theme.fontxxxl} ;
color: ${props => props.theme.text};
transition: all 0.2 ease;
&:hover{
    transform: scale(1.1);
}

`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
        A.
        </Link>
    </LogoText>
  )
}

export default Logo