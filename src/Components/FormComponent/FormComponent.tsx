import * as React from 'react';

import { Form, Field } from 'react-final-form';
import { InputComponent } from '..';
import {
   StyledFormComponent,
   StyledFormFieldWrapper,
} from './FormComponent.css';

const FormComponent: React.FC = () => {
   const handleSubmit = () => {};
   return (
      <Form
         onSubmit={handleSubmit}
         render={({ handleSubmit, form, submitting, pristine, values }) => (
            <StyledFormComponent onSubmit={handleSubmit}>
               <Field name='name'>
                  {({ input, meta }) => (
                     <StyledFormFieldWrapper>
                        <label>Dish Name</label>
                        <InputComponent
                           type='text'
                           input={input}
                           meta={meta}
                           placeholder='Dish Name'
                        />
                     </StyledFormFieldWrapper>
                  )}
               </Field>
               <Field name='preparation_time'>
                  {({ input, meta }) => (
                     <StyledFormFieldWrapper>
                        <label>Preparation Time</label>
                        <InputComponent
                           type='time'
                           input={input}
                           meta={meta}
                           placeholder='Preparation Time'
                        />
                     </StyledFormFieldWrapper>
                  )}
               </Field>
               <Field name='type'>
                  {({ input, meta }) => (
                     <StyledFormFieldWrapper>
                        <label>Select your favourite dish</label>
                        <InputComponent
                           type='select'
                           input={input}
                           meta={meta}
                           placeholder='Dish Type'
                        />
                     </StyledFormFieldWrapper>
                  )}
               </Field>
            </StyledFormComponent>
         )}
      />
   );
};

export default FormComponent;
