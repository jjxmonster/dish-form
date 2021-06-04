import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { InputComponent } from '../../../index';
import {
   StyledFormComponent,
   StyledFormFieldWrapper,
   StyledErrorTextWrapper,
} from '../../FormElements.css';

interface PizzaFormErrors {
   spiciness_scale: string | undefined;
}
const SoupForm = () => {
   return (
      <Form
         onSubmit={console.log}
         validate={values => {
            const errors: PizzaFormErrors = {
               spiciness_scale: undefined,
            };

            return errors;
         }}
         render={({ handleSubmit, form, submitting, pristine, values }) => (
            <StyledFormComponent onSubmit={handleSubmit}>
               <Field name='spiciness_scale '>
                  {({ input, meta }) => (
                     <StyledFormFieldWrapper>
                        <label>Specify the spiciness scale</label>
                        <InputComponent
                           type='spiciness_scale'
                           input={input}
                           meta={meta}
                           placeholder='Spiciness_scale '
                        />
                        {meta.error && meta.touched && (
                           <StyledErrorTextWrapper>
                              {meta.error}
                           </StyledErrorTextWrapper>
                        )}
                     </StyledFormFieldWrapper>
                  )}
               </Field>
            </StyledFormComponent>
         )}
      />
   );
};

export default SoupForm;
