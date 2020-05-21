import styled from  'styled-components';

export const HomeSection = styled.div`
    height: 500px;
    background: url(https://i.pinimg.com/originals/92/11/34/9211348f010cc637153b5b208588e015.png);
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`
   


export const HomeInformation= styled.div`
 position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
   


export const HomeTitle= styled.h2`
    font-size: 70px;
    font-weight: bold;
    color: #212F3D;

    @media (){

    }
`
    


export const HomeInfo=styled.h4`
    font-size: 45px;
    color: #eb5424;
    font-weight: bold;
    margin-bottom: 20px;
`  

export const HomeDesc=styled.p`
    font-size: 30px;
    line-height: 1.5;
    color: #273746;
    margin-bottom: 20px;
    width: 550px;
     text-align: center;
   
` 

export const Span= styled.span`
     color: #000

`

export const HomeBtn= styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 200px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold
    &: hover{
        background: #fff;
    color: #eb5424
   
    `
   








/*@media (max-width:768px) {
    .home .home-information .home-title {
        font-size: 40px;
        color: #fff
    }
    
    .home .home-information .home-info {
        font-size: 20px
    }
    
    .home .home-information .home-desc {
        font-size: 15px
    }
}

@media (max-width:575px) {
    .home .home-information .home-title {
        font-size: 30px;
    }
}*/


 