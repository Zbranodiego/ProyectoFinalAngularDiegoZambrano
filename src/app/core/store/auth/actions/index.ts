import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Users } from "../../../../layouts/dashboard/pages/users/models";

export const AuthActions = createActionGroup({
    source:'Auth',
    events:{
        'Set auth user':props<{user:Users}>(),
        logout:emptyProps(),
    }
})