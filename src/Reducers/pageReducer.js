import {PageType} from '../Actions/Type/PageType';
//initial value of State
const initialState = {
    data:[]
}
//Reducer to store 
export const pageReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case PageType:
            return {
                ...state,
                data:state.data.concat(payload)
            }
        default:
            return state
    }
}
