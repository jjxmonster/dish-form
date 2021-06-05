import styled from 'styled-components';

export const StyledFormComponent = styled.form`
   flex: 5;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding: 0 10%;
`;
export const StyledFormFieldWrapper = styled.div`
   width: 100%;
   height: 25%;
   margin-bottom: 1px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   > label {
      font-size: 1.7vh;
      font-weight: 700;
      padding-bottom: 5px;
   }
`;
export const StyledErrorTextWrapper = styled.span`
   color: red;
   font-size: 1.6vh;
`;

export const StyledFormSummaryWrapper = styled.ul`
   flex: 5;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   padding: 0 10%;
   > li {
      padding: 0 5%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   > li:nth-child(odd) {
      background: ${({ theme }) => theme.colors.grey.light};
   }
`;

export const StyledSubmitButton = styled.button`
   width: 12%;
   height: 7%;
   color: white;
   text-transform: uppercase;
   font-weight: 700;
   font-size: 1.5vh;
   position: absolute;
   bottom: 5%;
   left: 50%;
   border-radius: 60px;
   background: ${({ theme }) => theme.colors.gradient.vertical};
   transition: 0.2s ease;
   &:hover {
      transform: translateY(-5px);
   }
`;
