import * as types from '../Actions/types';
import { changeFormStepAction } from '../Actions/appActions';

export interface AppState {
   formStep: string | undefined;
   isUserPassedFirstStep: boolean;
   isUserPassedSecondStep: boolean;
   dishName: string | undefined;
   preparationTime: string | undefined;
   dishType: string | undefined;
}

const initialState: AppState = {
   formStep: '1',
   isUserPassedFirstStep: false,
   isUserPassedSecondStep: false,
   dishName: undefined,
   preparationTime: undefined,
   dishType: undefined,
};

type actions = changeFormStepAction;

export const appReducer = (
   state: AppState = initialState,
   action: actions
): AppState => {
   const { type, payload } = action;
   switch (type) {
      case types.CHANGE_FORM_STEP:
         return { ...state, formStep: payload };
      case types.ASSIGN_DISH_NAME:
         return { ...state, dishName: payload };
      case types.ASSIGN_DISH_TYPE:
         return { ...state, dishType: payload };
      case types.USER_PASSED_1ST_STEP:
         return { ...state, isUserPassedFirstStep: true };
      default:
         return state;
   }
};

export {};
