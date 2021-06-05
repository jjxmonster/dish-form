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
export type resetFormAction = Action<null>;
export function resetForm(): resetFormAction {
   return createAction(types.RESET_FORM, null);
}

//////////////////////////////////////////////////////////////////////////////////////////////// USER

export type assignDishNameAction = Action<string>;
export function assignDishName(name: string): assignDishNameAction {
   return createAction(types.ASSIGN_DISH_NAME, name);
}
export type assignDishTypeAction = Action<string>;
export function assignDishType(type: string): assignDishTypeAction {
   return createAction(types.ASSIGN_DISH_TYPE, type);
}
export type assignPreparationTimeAction = Action<string>;
export function assignPreparationTime(
   time: string
): assignPreparationTimeAction {
   return createAction(types.ASSIGN_PREPARATION_TIME, time);
}
export type userConfiguredDishAction = Action<string>;
export function userConfiguredDish(config: string): userConfiguredDishAction {
   return createAction(types.USER_CONFIGURED_DISH, config);
}
