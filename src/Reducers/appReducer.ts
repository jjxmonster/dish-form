import * as types from '../Actions/types';
import { changeFormStepAction } from '../Actions/appActions';

export interface AppState {
   formStep: number | undefined;
}

const initialState: AppState = {
   formStep: 1,
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

      default:
         return state;
   }
};

export {};
