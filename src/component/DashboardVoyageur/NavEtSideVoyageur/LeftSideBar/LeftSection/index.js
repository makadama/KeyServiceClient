/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import BurgerButton from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import './style.scss';

const LeftSection = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? 'show' : 'hide'}`}>
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton
          style={{backgroundColor:'#3421C0'}}
          onClick={() => setIsShowSidebar(false)}

        />
        <a href="#" style={{marginLeft:'50px', color:'#89ba16',fontSize:'20px', textDecoration:'none'}}> Key Service </a>
      </div>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li>
          <a
            href="#"
          >
          <i class="fas fa-user" style={{marginRight:'8px'}}></i>
            Mon profil
          </a>
        </li>
       
       
        <li>
          <a
            href="#"
          >
          <i class="fas fa-handshake " style={{marginRight:'8px'}}></i>
            prendre RDV
          </a>
        </li>
        <li>
          <a
            href="/paniers"
          >
          <i class="fas fa-shopping-cart" style={{marginRight:'8px'}}></i>
           Nos Paniers
          </a>
        </li>
        <li>
          <a
            href="#"
          >
          <i class="fas fa-envelope" style={{marginRight:'8px'}}></i>
            Contacter Key Service
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSection;
