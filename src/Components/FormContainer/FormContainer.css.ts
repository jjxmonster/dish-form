import styled from 'styled-components';

export const StyledFormContainer = styled.section`
   flex: 6;
   padding: 10% 5%;
   display: flex;
   flex-direction: column;
`;

export const StyledFormHeader = styled.header`
   flex: 1;
   > h1 {
      user-select: none;
      color: ${({ theme }) => theme.colors.grey.normal};
   }
`;
