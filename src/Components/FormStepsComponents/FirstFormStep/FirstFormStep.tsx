import * as React from 'react';

import { Form, Field } from 'react-final-form';
import { InputComponent, FormButton } from '../../index';

import {
   StyledFormComponent,
   StyledFormFieldWrapper,
   StyledErrorTextWrapper,
} from '../FormElements.css';

interface Errors {
   name: string | undefined;
   preparation_time: string | undefined;
   type: string | undefined;
}

const FirstFormStep: React.FC = () => {
   return (
      <Form
         onSubmit={console.log}
         validate={values => {
            const errors: Errors = {
               name: undefined,
               preparation_time: undefined,
               type: undefined,
            };
            if (!values.name) {
               errors.name = 'Required';
            } else if (values.name.length < 3) {
               errors.name = 'Dish name is too short';
            }
            if (!values.preparation_time) {
               errors.preparation_time = 'Required';
            }
            if (!values.type) {
               errors.type = 'Required';
            }
            return errors;
         }}
         render={({ handleSubmit, hasValidationErrors, values }) => {
            return (
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
                           {meta.error && meta.touched && (
                              <StyledErrorTextWrapper>
                                 {meta.error}
                              </StyledErrorTextWrapper>
                           )}
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
                           {meta.error && meta.touched && (
                              <StyledErrorTextWrapper>
                                 {meta.error}
                              </StyledErrorTextWrapper>
                           )}
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
                           {meta.error && meta.touched && (
                              <StyledErrorTextWrapper>
                                 {meta.error}
                              </StyledErrorTextWrapper>
                           )}
                        </StyledFormFieldWrapper>
                     )}
                  </Field>
                  <FormButton
                     text='next'
                     hideButton={hasValidationErrors}
                     values={values}
                  />
               </StyledFormComponent>
            );
         }}
      />
   );
};

export default FirstFormStep;
