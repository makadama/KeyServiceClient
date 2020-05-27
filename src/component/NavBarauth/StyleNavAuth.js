import styled from  'styled-components';

export const Styles=styled.div`
 .navbar{
  padding: 20px 0;
  overflow: hidden;
  background-color: #FDFEFE;
  border-bottom: 1px solid #000;
 }

.navbar-brand, .navbar-nav .nav-link{
  color: #000000;
  font-weight: bold;

  &:hover{
    color: #eb5424;
  }
}

.button_login{
  background-color: white; 
  border: 2px solid #ed7e24;
  color: #ed7e24;
  display: inline-block;
}

.button_register{
  background-color: #00cccb;
  border: solid;
  text-decoration: none;
  display: inline-block;
}

.img{
  width: 90px;
  height: 60px;
}

`