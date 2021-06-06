import * as React from 'react';
import { useSelector } from 'react-redux';
import { FormComponent } from '..';
import { AppState } from '../../Reducers/appReducer';
import gsap from 'gsap';

import { StyledFormContainer, StyledFormHeader } from './FormContainer.css';

const FormAnimations = (): void => {
   gsap.fromTo('.form-title', { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
};

const FormContainer: React.FC = () => {
   const formStep = useSelector((state: AppState) => state.formStep);
   const dishType = useSelector((state: AppState) => state.dishType);
   const [formTitle, setFormTitle] = React.useState<string>('');

   const FormTitleSwitch = () => {
      const formTitle = document.querySelector('.form-title');
      if (formTitle)
         switch (formStep) {
            case '1':
               return setFormTitle(
                  '1. Fill in the information about your dish.'
               );
            case '2': {
               switch (dishType) {
                  case 'pizza':
                     return setFormTitle('2. Configure your pizza.');
                  case 'soup':
                     return setFormTitle('2. Configure your soup.');
                  case 'Sandwich':
                     return setFormTitle('2. Configure your sandwich.');
                  default:
                     return setFormTitle('2. Configure your dish.');
               }
            }
            default: {
               return setFormTitle('3. Your dish order summary.');
            }
         }
   };

   React.useEffect(() => {
      FormTitleSwitch();
      FormAnimations();
   });
   return (
      <StyledFormContainer>
         <StyledFormHeader>
            <h1 className='form-title'>{formTitle}</h1>
         </StyledFormHeader>
         <FormComponent />
      </StyledFormContainer>
   );
};

export default FormContainer;
