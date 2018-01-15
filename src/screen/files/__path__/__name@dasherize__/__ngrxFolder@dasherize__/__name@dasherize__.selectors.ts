import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../app/state/app.selectors';
import * as from<%= classify(name) %> from './<%=dasherize(name)%>.reducers';

export interface <%= classify(name) %>State {
  stateData: from<%= classify(name) %>.State;
}

export interface State extends fromRoot.State {
  <%=dasherize(name)%>: <%= classify(name) %>State;
}

export const reducers = {
  stateData: from<%= classify(name) %>.reducer
};

export const select<%= classify(name) %>State = createFeatureSelector<<%= classify(name) %>State>('<%=dasherize(name)%>');

export const select<%= classify(name) %>StateData = createSelector(select<%= classify(name) %>State, (state: <%= classify(name) %>State) => state.stateData);

export const get<%= classify(name) %>State = createSelector(select<%= classify(name) %>StateData, from<%= classify(name) %>.getStateData);

export const get<%= classify(name) %>ScreenError = createSelector(select<%= classify(name) %>StateData, from<%= classify(name) %>.getError);

export const get<%= classify(name) %>ScreenPending = createSelector(select<%= classify(name) %>StateData, from<%= classify(name) %>.getPending);