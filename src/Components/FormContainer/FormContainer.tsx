import * as React from 'react';
import { useSelector } from 'react-redux';
import { FormComponent } from '..';
import { AppState } from '../../Reducers/appReducer';

import { StyledFormContainer, StyledFormHeader } from './FormContainer.css';

const FormContainer: React.FC = () => {
   const formStep = useSelector((state: AppState) => state.formStep);
   const dishType = useSelector((state: AppState) => state.dishType);

   const FormTitleSwitch = (): JSX.Element => {
      switch (formStep) {
         case '1':
            return <h1>1. Fill in the information about your dish.</h1>;
         case '2': {
            switch (dishType) {
               case 'pizza':
                  return <h1>2. Configure your pizza</h1>;
               case 'soup':
                  return <h1>2. Configure your soup</h1>;
               case 'Sandwich':
                  return <h1>2. Configure your sandwich</h1>;
               default:
                  return <h1>2. Configure your dish</h1>;
            }
         }
         case '3': {
            return <h1>3. Your dish order summary</h1>;
         }
         default:
            return <h1>Form</h1>;
      }
   };
   return (
      <StyledFormContainer>
         <StyledFormHeader>
            <FormTitleSwitch />
         </StyledFormHeader>
         <FormComponent />
      </StyledFormContainer>
   );
};

export default FormContainer;
