import * as types from '../Actions/types';
import {
   changeFormStepAction,
   userConfiguredDishAction,
} from '../Actions/appActions';

export interface AppState {
   formStep?: string;
   dishName?: string;
   preparationTime?: string;
   dishType?: string;
   dishConfig?: string;
}

const initialState: AppState = {
   formStep: '1',
};

type actions = changeFormStepAction | userConfiguredDishAction;

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
      case types.ASSIGN_PREPARATION_TIME:
         return { ...state, preparationTime: payload };
      case types.USER_CONFIGURED_DISH:
         return { ...state, dishConfig: payload };

      case types.RESET_FORM:
         return {
            ...state,
            formStep: '1',
            dishName: undefined,
            preparationTime: undefined,
            dishType: undefined,
            dishConfig: undefined,
         };
      default:
         return state;
   }
};

export {};
