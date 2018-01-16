import { <%= classify(name) %>ActionTypes, <%= classify(name) %>Actions } from './<%=dasherize(name)%>.actions';
import { I<%= classify(name) %> } from '../../../common';

export interface State {
    error: string | null;
    pending: boolean;
    stateData: I<%= classify(name) %> | null;
}

export const initialState: State = {
    error: null,
    pending: false,
    stateData: null
};

export function reducer(state = initialState, action: <%= classify(name) %>Actions): State {
    switch (action.type) {

        case <%= classify(name) %>ActionTypes.Load<%= classify(name) %>State: {
            return {
                ...state,
                error: null,
                pending: false
            };
        }

        case <%= classify(name) %>ActionTypes.Load<%= classify(name) %>StateSuccess: {
            return {
                error: null,
                pending: false,
                stateData: action.payload
            };
        }

        case <%= classify(name) %>ActionTypes.Load<%= classify(name) %>StateFail: {
            return {
                ...state,
                error: action.payload,
                pending: false
            };
        }

        case <%= classify(name) %>ActionTypes.<%= classify(name) %>ScreenErrorReset: {
            return {
                ...state,
                error: null,
                pending: false
            };
        } 

        default: {
            return state;
        }
    }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
export const getStateData = (state: State) => state.stateData;