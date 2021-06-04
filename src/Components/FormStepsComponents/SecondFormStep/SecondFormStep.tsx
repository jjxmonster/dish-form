import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../Reducers/appReducer';

import PizzaForm from './PizzaForm';
import SoupForm from './SoupForm';

const SecondFormStep: React.FC = () => {
   const dishType = useSelector((state: AppState) => state.dishType);
   const DishFormSwitch = (): JSX.Element => {
      switch (dishType) {
         case 'pizza':
            return <PizzaForm />;
         case 'soup':
            return <SoupForm />;
         default:
            return <div>FORM</div>;
      }
   };
   return <DishFormSwitch />;
};

export default SecondFormStep;
