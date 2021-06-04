import * as types from './types';

export interface Action<T> {
   readonly type: string;
   readonly payload?: T;
}

export function createAction<T>(type: string, payload: T): Action<T> {
   return { type, payload };
}

//////////////////////////////////////////////////////////////////////////////////////////////// FORM
export type changeFormStepAction = Action<string>;
export function changeFormStep(num: string): changeFormStepAction {
   return createAction(types.CHANGE_FORM_STEP, num);
}

//////////////////////////////////////////////////////////////////////////////////////////////// USER
export type userPassFirstStepAction = Action<null>;
export function userPassFirstStep(): userPassFirstStepAction {
   return createAction(types.USER_PASSED_1ST_STEP, null);
}
export type assignDishNameAction = Action<string>;
export function assignDishName(type: string): assignDishNameAction {
   return createAction(types.ASSIGN_DISH_NAME, type);
}
export type assignDishTypeAction = Action<string>;
export function assignDishType(type: string): assignDishTypeAction {
   return createAction(types.ASSIGN_DISH_TYPE, type);
}
