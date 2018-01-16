import { Action } from '@ngrx/store';
import { I<%= classify(name) %> } from '../../../interfaces';

export enum <%= classify(name) %>ActionTypes {
  Load<%= classify(name) %>State = '[<%= classify(name) %>] Load <%= classify(name) %> State',
  Load<%= classify(name) %>StateSuccess = '[<%= classify(name) %>] Load <%= classify(name) %> State Success',
  Load<%= classify(name) %>StateFail = '[<%= classify(name) %>] Load <%= classify(name) %> State Fail',
  <%= classify(name) %>ScreenErrorReset = '[<%= classify(name) %>] <%= classify(name) %> Screen Error Reset'

}

export class Load<%= classify(name) %>State implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Load<%= classify(name) %>State;
}

export class Load<%= classify(name) %>StateSuccess implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Load<%= classify(name) %>StateSuccess;
  constructor(public payload: I<%= classify(name) %> ) {}
}

export class Load<%= classify(name) %>StateFail implements Action {
  readonly type = <%= classify(name) %>ActionTypes.Load<%= classify(name) %>StateFail;
  constructor(public payload: any) {}
}

export class <%= classify(name) %>ScreenErrorReset implements Action {
  readonly type = <%= classify(name) %>ActionTypes.<%= classify(name) %>ScreenErrorReset;
}

export type <%= classify(name) %>Actions = 
  Load<%= classify(name) %>State
  | Load<%= classify(name) %>StateSuccess
  | Load<%= classify(name) %>StateFail
  | <%= classify(name) %>ScreenErrorReset;