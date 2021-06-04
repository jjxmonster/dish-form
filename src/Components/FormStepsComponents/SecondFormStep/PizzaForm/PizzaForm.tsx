import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { InputComponent } from '../../../index';
import {
   StyledFormComponent,
   StyledFormFieldWrapper,
   StyledErrorTextWrapper,
} from '../../FormElements.css';

interface PizzaFormErrors {
   no_of_slices: string | undefined;
   diameter: string | undefined;
}
const PizzaForm = () => {
   return (
      <Form
         onSubmit={console.log}
         validate={values => {
            const errors: PizzaFormErrors = {
               no_of_slices: undefined,
               diameter: undefined,
            };
            if (!values.no_of_slices) {
               errors.no_of_slices = 'Required';
            } else if (values.no_of_slices > 10) {
               errors.no_of_slices = 'Too much slices';
            } else if (values.no_of_slices < 1) {
               errors.no_of_slices = 'You will pay for an empty plate';
            }
            if (!values.diameter) {
               errors.diameter = 'Required';
            } else if (values.diameter > 100 || values.diameter < 10) {
               errors.diameter = 'Your pizza will be too big or too small';
            }
            return errors;
         }}
         render={({ handleSubmit, form, submitting, pristine, values }) => (
            <StyledFormComponent onSubmit={handleSubmit}>
               <Field name='no_of_slices'>
                  {({ input, meta }) => (
                     <StyledFormFieldWrapper>
                        <label>How much slices?</label>
                        <InputComponent
                           type='number'
                           input={input}
                           meta={meta}
                           placeholder='Number of slices'
                        />
                        {meta.error && meta.touched && (
                           <StyledErrorTextWrapper>
                              {meta.error}
                           </StyledErrorTextWrapper>
                        )}
                     </StyledFormFieldWrapper>
                  )}
               </Field>
               <Field name='diameter'>
                  {({ input, meta }) => (
                     <StyledFormFieldWrapper>
                        <label>Specify the diameter.</label>
                        <InputComponent
                           type='numberFloat'
                           input={input}
                           meta={meta}
                           placeholder='Diameter'
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

export default PizzaForm;
