import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { FormButton, InputComponent } from '../../../index';
import {
   StyledFormComponent,
   StyledFormFieldWrapper,
   StyledErrorTextWrapper,
} from '../../FormElements.css';

interface SoupFormErrors {
   spiciness_scale: string | undefined;
}
const SoupForm = () => {
   return (
      <Form
         onSubmit={console.log}
         validate={values => {
            const errors: SoupFormErrors = {
               spiciness_scale: undefined,
            };

            if (!values.spiciness_scale) {
               errors.spiciness_scale = 'Required';
            } else if (values.spiciness_scale > 10) {
               errors.spiciness_scale =
                  "You are crazy, but we don't have soup hot as hell";
            } else if (values.spiciness_scale < 1) {
               errors.spiciness_scale = 'Look like you want only water';
            }
            return errors;
         }}
         render={({ handleSubmit, hasValidationErrors, values }) => (
            <StyledFormComponent onSubmit={handleSubmit} className='form'>
               <Field name='spiciness_scale'>
                  {({ input, meta }) => (
                     <StyledFormFieldWrapper>
                        <label>Specify the spiciness scale</label>
                        <InputComponent
                           type='number(1-10)'
                           input={input}
                           meta={meta}
                           placeholder='Spiciness scale'
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

export default SoupForm;
