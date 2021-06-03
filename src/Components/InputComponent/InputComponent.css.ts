import styled from 'styled-components';

export const StyledInput = styled.input`
   padding: 3px 5px;
   font-size: 1.7vh;
   border: 1px solid #ccc;
   border-radius: 1vh;
   height: 50%;
   &:focus::placeholder {
      font-size: 1.3vh;
   }
   ::placeholder {
      font-size: 1.5vh;
      transition: 0.2s ease;
   }
   background: ${({ theme }) => theme.colors.grey.light};
`;
export const StyledSelectInput = styled.select`
   padding: 3px 5px;
   font-size: 1em;
   border: 1px solid #ccc;
   border-radius: 1vh;
   height: 50%;
   font-size: 1.7vh;
   background: ${({ theme }) => theme.colors.grey.light};
`;
