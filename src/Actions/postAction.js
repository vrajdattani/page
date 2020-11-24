import {FetchService} from '../Services/FetchService';
import {PageType} from './Type/PageType';
//postAction to fetch post from api
export const postAction = (id)=>{
    return async(dispatch) =>{
        // FetchService is used to calling an api
        const details = await FetchService(id);
        // console.log(details.data);
        dispatch({type:PageType,payload:details.data.hits})
        }
}