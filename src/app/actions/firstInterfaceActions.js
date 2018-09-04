import { FIELD_VISIBILITY } from '../constants/firstInterfaceConstants';

export function fieldVisibility(visible){
    return(dispatch)=>{
        dispatch({
            type: FIELD_VISIBILITY,
            payload: visible
        })
    };
}