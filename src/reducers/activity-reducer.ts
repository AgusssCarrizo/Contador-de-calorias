import { Activity } from '../types'
export type ActivityActions = {
type : 'save-activity', payload: {newActivity: Activity}
}

export type ActivityState = {
    activities : Activity []
}
export const initialState ={
activities: []
}

export const ActivityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
if(action.type === 'save-activity') {
    //Este codigo maneja la logica para actualizar el state
return {
    ...state,
    activities: [...state.activities, action.payload.newActivity]
}
}
return state
}