import styled from 'styled-components';

export const StyledOrderContainer = styled.main`
   width: 60vw;
   height: 70vh;
   background: white;
   box-shadow: 5px 5px 5px -3px rgba(128, 128, 128, 1);
   display: flex;
   @media (max-width: 1000px) {
      flex-direction: column;
      width: 90vw;
      height: 90vh;
   }
`;
