import styled from 'styled-components';

export const StyledButton = styled.button<StyledButtonProps>`
   width: 10%;
   height: 7%;
   color: white;
   text-transform: uppercase;
   font-weight: 700;
   font-size: 1.5vh;
   position: absolute;
   bottom: 10%;
   left: 50%;
   border-radius: 60px;
   background: ${({ theme }) => theme.colors.gradient.vertical};
   transition: 0.2s ease;
   &:hover {
      transform: translateY(-5px);
   }
   ${({ isButtonShouldShow }) =>
      isButtonShouldShow ? 'display:block' : `display:none`}
`;

interface StyledButtonProps {
   isButtonShouldShow: boolean;
}
