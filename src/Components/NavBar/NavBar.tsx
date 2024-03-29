import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../Reducers/appReducer';
import gsap from 'gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {
   StyledNavBar,
   StyledNavNumberElement,
   StyledDotElement,
} from './NavBar.css';

// Animations with gsap
const navBarAnimations = (navElements: Element[]): void => {
   navElements.forEach((element: Element, index: number) => {
      gsap.from(element, { y: -50, opacity: 0, delay: `0.${index}` });
   });
};

const NavBar: React.FC = () => {
   const activeStep = useSelector((store: AppState) => store.formStep);

   useEffect(() => {
      const getNavElements = document.querySelectorAll('.nav-element');
      const navElements = Array.from(getNavElements);
      if (activeStep !== undefined) {
         navElements[Number(activeStep) - 1].classList.add('active');
      }
   }, [activeStep]);

   useEffect(() => {
      const getNavElements = document.querySelectorAll('.nav-element');
      const navElements = Array.from(getNavElements);
      navBarAnimations(navElements);
   }, []);
   return (
      <StyledNavBar>
         <StyledNavNumberElement className='nav-element'>
            <h2>1</h2> <div></div>
         </StyledNavNumberElement>
         <StyledDotElement>
            <FontAwesomeIcon icon={faCircle} />
         </StyledDotElement>
         <StyledDotElement>
            <FontAwesomeIcon icon={faCircle} />
         </StyledDotElement>
         <StyledNavNumberElement className='nav-element'>
            <h2>2</h2> <div></div>
         </StyledNavNumberElement>
         <StyledDotElement>
            <FontAwesomeIcon icon={faCircle} />
         </StyledDotElement>
         <StyledDotElement>
            <FontAwesomeIcon icon={faCircle} />
         </StyledDotElement>
         <StyledNavNumberElement className='nav-element'>
            <h2>3</h2> <div></div>
         </StyledNavNumberElement>
      </StyledNavBar>
   );
};

export default NavBar;
