import styled from  'styled-components'


export const NavbarSection  = styled.navbar`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`

export const Logo = styled.div ` 
    width: 25%;
    float: left;
    `
   

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
`




export const UlList =styled.ul`
    width: 75%;
    float: left;
    list-style: none;
    padding: 0;
`


export const ListItem = styled.li`
display: inline-block;
`

export const Anchor= styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover:{
        color: #eb5424;
    }
`