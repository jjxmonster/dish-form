import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetForm } from '../../../Actions/appActions';
import { fetchOrder } from '../../../fetch/fetchOrder';
import { AppState } from '../../../Reducers/appReducer';

import {
   StyledFormSummaryWrapper,
   StyledSubmitButton,
} from '../FormElements.css';

const FormSummary: React.FC = () => {
   const dispatch = useDispatch();
   const order = useSelector((state: AppState) => state);
   const userDishConfig = order.dishConfig
      ? JSON.parse(order.dishConfig)
      : null;

   const { dishName, dishType, preparationTime } = order;

   const DishConfigDisplay = (): JSX.Element => {
      switch (dishType) {
         case 'pizza':
            return (
               <>
                  <li>
                     <span>Slices Of Pizza</span> {userDishConfig.no_of_slices}
                  </li>
                  <li>
                     <span>Pizza Diameter</span> {userDishConfig.diameter}
                  </li>
               </>
            );
         case 'soup':
            return (
               <>
                  <li>
                     <span>Spiciness Scale</span>
                     {userDishConfig.spiciness_scale}
                  </li>
               </>
            );
         case 'sandwich':
            return (
               <>
                  <li>
                     <span>Slices Of Bread</span>
                     {userDishConfig.slices_of_bread}
                  </li>
               </>
            );
         default:
            return <li>Something went wrong...</li>;
      }
   };
   const handleSubmit = async (data: object) => {
      await fetchOrder(data).then(res => {
         if ((res.status = 200)) {
            alert('Your dish has been successfully added');
            dispatch(resetForm());
            // remove active class in navbar
            const getNavElements = document.querySelectorAll('.nav-element');
            const navElements = Array.from(getNavElements);
            navElements.forEach(item => item.classList.remove('active'));
         }
      });
   };

   const handleDataPreparation = () => {
      const { no_of_slices, diameter, slices_of_bread, spiciness_scale } =
         userDishConfig;
      switch (dishType) {
         case 'pizza': {
            const data = {
               name: dishName,
               type: dishType,
               preparation_time: preparationTime,
               no_of_slices: Number(no_of_slices),
               diameter: Number(diameter),
            };
            return handleSubmit(data);
         }
         case 'soup': {
            const data = {
               name: dishName,
               type: dishType,
               preparation_time: preparationTime,
               spiciness_scale: Number(spiciness_scale),
            };
            return handleSubmit(data);
         }
         case 'sandwich': {
            const data = {
               name: dishName,
               type: dishType,
               preparation_time: preparationTime,
               slices_of_bread: Number(slices_of_bread),
            };
            return handleSubmit(data);
         }
         default:
            break;
      }
   };

   return (
      <StyledFormSummaryWrapper>
         <li>
            <span>Dish Name</span> {dishName}
         </li>
         <li>
            <span>Dish Type</span> {dishType}
         </li>
         <li>
            <span>Preparation Time</span> {preparationTime}
         </li>
         <DishConfigDisplay />
         <StyledSubmitButton onClick={handleDataPreparation}>
            SUBMIT
         </StyledSubmitButton>
      </StyledFormSummaryWrapper>
   );
};

export default FormSummary;
