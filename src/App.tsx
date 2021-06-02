import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './theme/GlobalStyles';
import { theme } from './theme/theme';

import { OrderContainer } from './Components';

const StyledHomePageContainer = styled.div`
   width: 100vw;
   height: 100vh;
   background: white;
   display: grid;
   place-items: center;
`;

const App: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <StyledHomePageContainer>
            <OrderContainer />
         </StyledHomePageContainer>
      </ThemeProvider>
   );
};

export default App;
