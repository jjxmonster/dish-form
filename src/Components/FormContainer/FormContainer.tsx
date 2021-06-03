import * as React from 'react';
import { FormComponent } from '..';

import { StyledFormContainer, StyledFormHeader } from './FormContainer.css';

const FormContainer: React.FC = () => {
   return (
      <StyledFormContainer>
         <StyledFormHeader>
            <h1>1. Fill in the information about your dish.</h1>
         </StyledFormHeader>
         <FormComponent />
      </StyledFormContainer>
   );
};

export default FormContainer;
