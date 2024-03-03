import { createReducer, on } from "@ngrx/store";
import { Users } from "../../../../layouts/dashboard/pages/users/models";
import { AuthActions } from "../actions";


export const featureName = 'auth';

export interface AuthState {
    user: Users | null;
}

const initialState: AuthState = {
    user: null
}

export const authReducer = createReducer(initialState,
    on(AuthActions.setAuthUser, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(AuthActions.logout,()=> initialState)
    )