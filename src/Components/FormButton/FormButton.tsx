import * as React from 'react';
import { useDispatch } from 'react-redux';

import { userPassFirstStep, changeFormStep } from '../../Actions/appActions';

import { StyledButton } from './FormButton.css';

export interface FormButtonProps {
   text: string;
   hideButton: boolean;
   values: object;
}

const FormButton: React.FC<FormButtonProps> = ({
   text,
   hideButton,
   values,
}) => {
   const dispatch = useDispatch();
   console.log(values);
   const handleButtonClick = () => {
      dispatch(userPassFirstStep());
      dispatch(changeFormStep('2'));
      // dispatch(assignDishType(values?.type));
   };
   return (
      <StyledButton
         onClick={handleButtonClick}
         isButtonShouldShow={!hideButton}
      >
         {text}
      </StyledButton>
   );
};

export default FormButton;
