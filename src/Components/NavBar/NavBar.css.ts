import styled from 'styled-components';

export const StyledNavBar = styled.nav`
   flex: 2;
   padding-top: 5%;
   background: ${({ theme }) => theme.colors.gradient.horizontal};
   .active {
      opacity: 1;
   }
`;
export const StyledNavNumberElement = styled.div`
   color: white;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 15%;
   opacity: 0.5;
   cursor: pointer;

   > h2 {
      font-size: 3vh;
   }
   > div {
      height: 1.5vh;
      width: 75%;
      background: white;
      border-radius: 60px;
   }
`;

export const StyledDotElement = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: white;
   opacity: 0.5;
   margin: 5% 15%;
   font-size: 1vh;
   padding-left: 1%;
`;
