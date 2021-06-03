import * as React from 'react';

import { StyledButton } from './FormButton.css';

export interface FormButtonProps {
   text: string;
}

const FormButton: React.FC<FormButtonProps> = ({ text }) => {
   return <StyledButton>{text}</StyledButton>;
};

export default FormButton;
