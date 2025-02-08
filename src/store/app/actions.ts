import { createReduxAction, createReduxActions } from '../reduxActions';
import * as types from './types';

export const [getProducts, getProductsSuccess, getProductsFail] = createReduxActions(
    types.GET_PRODUCTS,
  );

  export const [getProduct, getProductSuccess, getProductFail] = createReduxActions(
    types.GET_PRODUCT,
  );
  export const clearProduct = createReduxAction(types.CLEAR_PRODUCT);
