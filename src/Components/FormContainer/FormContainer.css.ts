import styled from 'styled-components';

export const StyledFormContainer = styled.section`
   flex: 6;
   padding: 12% 0;
   display: flex;
   flex-direction: column;
`;

export const StyledFormHeader = styled.header`
   flex: 1;
   padding: 0 10%;
   border-bottom: 1px solid ${({ theme }) => theme.colors.grey.normal};
   > h1 {
      font-size: 2.5vh;
      user-select: none;
      color: ${({ theme }) => theme.colors.grey.normal};
   }
`;
