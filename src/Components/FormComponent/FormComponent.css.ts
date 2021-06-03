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
