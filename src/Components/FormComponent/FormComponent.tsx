import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../Reducers/appReducer';

import {
   FirstFormStep,
   SecondFormStep,
   FormSummary,
} from '../FormStepsComponents';

const FormComponent: React.FC = () => {
   const formStep = useSelector((state: AppState) => state.formStep);

   const FormSwitch = (): JSX.Element => {
      switch (formStep) {
         case '1':
            return <FirstFormStep />;
         case '2':
            return <SecondFormStep />;
         default:
            return <FormSummary />;
      }
   };
   return <FormSwitch />;
};

export default FormComponent;
