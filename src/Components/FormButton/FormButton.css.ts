import styled from 'styled-components';

export const StyledButton = styled.button`
   width: 12%;
   height: 12%;
   color: white;
   text-transform: uppercase;
   font-weight: 700;
   font-size: 1.5vh;
   position: absolute;
   bottom: -20%;
   left: 0;
   right: 0;
   margin: auto;
   border-radius: 60px;
   background: ${({ theme }) => theme.colors.gradient.vertical};
   transition: 0.2s ease;
   &:hover {
      transform: translateY(-5px) !important;
   }
   @media (max-width: 1000px) {
      width: 22%;
      height: 12%;
      bottom: -10%;
   }
`;
