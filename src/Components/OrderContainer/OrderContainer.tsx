import * as React from 'react';

import { NavBar, FormContainer } from '../index';
import { StyledOrderContainer } from './OrderContainer.css';

const OrderContainer: React.FC = () => {
   return (
      <StyledOrderContainer>
         <NavBar />
         <FormContainer />
      </StyledOrderContainer>
   );
};

export default OrderContainer;
