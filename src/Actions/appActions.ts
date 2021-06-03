import * as types from './types';

export interface Action<T> {
   readonly type: string;
   readonly payload?: T;
}

export function createAction<T>(type: string, payload: T): Action<T> {
   return { type, payload };
}

//////////////////////////////////////////////////////////////////////////////////////////////// FORM
export type changeFormStepAction = Action<number>;
export function changeFormStep(num: number): changeFormStepAction {
   return createAction(types.CHANGE_FORM_STEP, num);
}
