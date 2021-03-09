/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import BurgerButton from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './style.scss';

const LeftSection = ({auth}) => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? 'show' : 'hide'}`}>
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton
          style={{backgroundColor:'#3421C0'}}
          onClick={() => setIsShowSidebar(false)}

        />
        <a href="#" style={{marginLeft:'50px', color:'#ed7e24',fontSize:'20px', textDecoration:'none'}}> Key Service </a>
      </div>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li>
          <a
            href="/welcomePage"
          >
          <i className="fas fa-home" style={{marginRight:'8px'}}></i>
            Accueil
          </a>
        </li>
        <li>
          <a
            href="/proprietaires"
          >
          <i className="fas fa-user" style={{marginRight:'8px'}}></i>
            Hôtes
          </a>
        </li>
       
       <li>
          <a
            href="/voyageurs"
          >
          <i className="fas fa-suitcase" style={{marginRight:'8px'}}></i>
            Voyageurs
          </a>
        </li>

        <li>
          <a
            href="/logements"
          >
          <i className="fas fa-building" style={{marginRight:'8px'}}></i>
            Logements
          </a>
        </li>
        <li>
          <a
            href="/locations"
          >
          <i className="fas fa-key" style={{marginRight:'8px'}}></i>
            Locations
          </a>
        </li>
        <li>
          <a
            href="/taches"
          >
          <i className="fas fa-broom" style={{marginRight:'8px'}}></i>
            Tâches
          </a>
        </li>
         <li>
          <a
            href="/rendez-vous"
          >
          <i className="fas fa-calendar" style={{marginRight:'8px'}}></i>
            Rendez-vous
          </a>
        </li>
        <li>
          <a
            href="/commandes"
          >
          <i className="fas fa-shopping-cart" style={{marginRight:'8px'}}></i>
            Commandes
          </a>
        </li>
      </ul>
    </div>
  );
};

 LeftSection.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(LeftSection);
