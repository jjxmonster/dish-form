import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { FormButton, InputComponent } from '../../../index';
import {
   StyledFormComponent,
   StyledFormFieldWrapper,
   StyledErrorTextWrapper,
} from '../../FormElements.css';

interface SandwichFormErrors {
   slices_of_bread: string | undefined;
}
const SandwichForm = () => {
   return (
      <Form
         onSubmit={console.log}
         validate={values => {
            const errors: SandwichFormErrors = {
               slices_of_bread: undefined,
            };
            if (!values.slices_of_bread) {
               errors.slices_of_bread = 'Required';
            } else if (values.slices_of_bread > 50) {
               errors.slices_of_bread = 'Too many slices for one order';
            } else if (values.slices_of_bread < 1) {
               errors.slices_of_bread = 'You will pay for an empty plate';
            }
            return errors;
         }}
         render={({ handleSubmit, hasValidationErrors, values }) => (
            <StyledFormComponent onSubmit={handleSubmit}>
               <Field name='slices_of_bread'>
                  {({ input, meta }) => (
                     <StyledFormFieldWrapper>
                        <label>How many slices of bread do you want?</label>
                        <InputComponent
                           type='number(1-10)'
                           input={input}
                           meta={meta}
                           placeholder='Slices of bread'
                        />
                        {meta.error && meta.touched && (
                           <StyledErrorTextWrapper>
                              {meta.error}
                           </StyledErrorTextWrapper>
                        )}
                     </StyledFormFieldWrapper>
                  )}
               </Field>
               {hasValidationErrors ? null : (
                  <FormButton text='summary' values={values} />
               )}
            </StyledFormComponent>
         )}
      />
   );
};

export default SandwichForm;
