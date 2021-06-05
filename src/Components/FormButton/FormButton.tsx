import * as React from 'react';
import { useDispatch } from 'react-redux';

import {
   changeFormStep,
   assignDishType,
   assignDishName,
   userConfiguredDish,
   assignPreparationTime,
} from '../../Actions/appActions';

import { StyledButton } from './FormButton.css';

export interface FormButtonProps {
   text: string;
   values: {
      name: string;
      preparation_time: string;
      type: string;
      no_of_slices: number;
      diameter: number;
   };
}

const FormButton: React.FC<FormButtonProps> = ({ text, values }) => {
   const dispatch = useDispatch();

   const handleButtonClick = () => {
      switch (text) {
         case 'next':
            const { type, name, preparation_time } = values;
            dispatch(changeFormStep('2'));
            dispatch(assignDishType(type));
            dispatch(assignDishName(name));
            dispatch(assignPreparationTime(preparation_time));
            break;
         case 'summary':
            dispatch(changeFormStep('3'));
            dispatch(userConfiguredDish(JSON.stringify(values)));
            break;
         default:
            return null;
      }
   };

   return <StyledButton onClick={handleButtonClick}>{text}</StyledButton>;
};

export default FormButton;
