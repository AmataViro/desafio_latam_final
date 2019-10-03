import { START, SUCCESS, ERROR } from './product.const';
import {productsGetAll, productsCreate, productsDelete, productsUpdate} from '../../../services/product.service';



const productActionStart = () => ({ type: START, payload: null });
const productActionSucces = (data) => ({ type: SUCCESS, payload: data });
const productActionError = (data) => ({ type: ERROR, payload: data });

const productActionCreateStart = () => ({ type: START, payload: null });
const productActionCreateSucces = (data) => ({ type: SUCCESS, payload: data });
const productActionCreateError = (data) => ({ type: ERROR, payload: data });

const productActionDeleteStart = () => ({ type: START, payload: null });
const productActionDeleteSucces = (data) => ({ type: SUCCESS, payload: null });
const productActionDeleteError = (data) => ({ type: ERROR, payload: data });

const productActionUpdateStart = () => ({ type: START, payload: null });
const productActionUpdateSucces = (data) => ({ type: SUCCESS, payload: null });
const productActionUpdateError = (data) => ({ type: ERROR, payload: data });

export const productAsyncAction = () => {
    return (dispatch)=>{
        dispatch(productActionStart());
        productsGetAll().then(res=>{
          dispatch(productActionSucces(res.data.data));
            
      }).catch(error=>{
          dispatch(productActionError(error.data));
      });
    }
}

export const productAsyncAtionCreate = (data) => {
    return (dispatch)=>{
        dispatch(productActionCreateStart());
        productsCreate(data).then(res=>{
            dispatch(productActionCreateSucces()); 

            // dispatch(productAsyncAction(res.data.data));
            // dispatch(productActionSucces(res.data.data));
             
      }).catch(error=>{
          dispatch(productActionCreateError(error.data));
      });
    }
}

export const productAsyncAtionDelete = (data) => {
    return (dispatch)=>{
        dispatch(productActionDeleteStart());
        productsDelete(data).then(res=>{
            dispatch(productAsyncAction(res.data.data));
            dispatch(productActionDeleteSucces(res.data.data));  
      }).catch(error=>{
          dispatch(productActionDeleteError(error.data));
      });
    }
}

export const productAsyncAtionUpdate = (data) => {
    return (dispatch)=>{
        dispatch(productActionUpdateStart());
        productsUpdate(data).then(res=>{
            dispatch(productAsyncAction(res.data.data));
            dispatch(productActionUpdateSucces(res.data.data));  
      }).catch(error=>{
          dispatch(productActionUpdateError(error.data));
      });
    }
}