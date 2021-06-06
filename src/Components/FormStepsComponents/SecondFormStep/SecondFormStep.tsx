import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../Reducers/appReducer';

import { FormStepsAnimations } from '../FormStepsAnimations';

import PizzaForm from './PizzaForm';
import SandwichForm from './SandwichForm';
import SoupForm from './SoupForm';

const SecondFormStep: React.FC = () => {
   const dishType = useSelector((state: AppState) => state.dishType);

   React.useEffect(() => {
      FormStepsAnimations();
   }, []);
   const DishFormSwitch = (): JSX.Element => {
      switch (dishType) {
         case 'pizza':
            return <PizzaForm />;
         case 'soup':
            return <SoupForm />;
         case 'sandwich':
            return <SandwichForm />;
         default:
            return <div>FORM</div>;
      }
   };
   return <DishFormSwitch />;
};

export default SecondFormStep;
