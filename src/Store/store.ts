import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer } from '../Reducers/appReducer';
import { AppState } from '../Reducers/appReducer';
import { changeFormStepAction } from '../Actions/appActions';

type actions = changeFormStepAction;

type DispatchType = (args: actions) => actions;

export default function configureStore() {
   const composedEnhancers = composeWithDevTools();
   const store: Store<AppState, actions> & { dispatch: DispatchType } =
      createStore(appReducer, composedEnhancers);
   return store;
}
