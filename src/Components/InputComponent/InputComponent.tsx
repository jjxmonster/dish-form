import * as React from 'react';
import { FieldMetaState, FieldInputProps } from 'react-final-form';

import { StyledInput, StyledSelectInput } from './InputComponent.css';

export interface InputComponentProps {
   type: string;
   placeholder: string;
   meta: FieldMetaState<any>;
   input: FieldInputProps<any, HTMLElement>;
}

const InputComponent: React.FC<InputComponentProps> = ({
   type,
   placeholder,
   meta,
   input,
}) => {
   const renderInput = () => {
      switch (type) {
         case 'text':
            return (
               <StyledInput
                  type={type}
                  placeholder={placeholder}
                  {...input}
                  {...meta}
               />
            );
         case 'select':
            return (
               <StyledSelectInput {...input}>
                  <option value='pizza'>🍕 Pizza</option>
                  <option value='soup'>🥣 Soup</option>
                  <option value='sandwich'>🥪 Sandwich</option>
               </StyledSelectInput>
            );
         case 'time':
            return (
               <StyledInput
                  type={type}
                  placeholder={placeholder}
                  {...input}
                  {...meta}
                  step='1'
                  min='00:20:00'
                  max='20:00:00'
               />
            );

         default:
            return null;
      }
   };
   return <>{renderInput()}</>;
};

export default InputComponent;
