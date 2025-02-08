import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/app";
import { call, put, takeLatest } from "redux-saga/effects";
import { getProductFail, getProductsFail, getProductsSuccess, getProductSuccess } from "./actions";
import { appService } from "../../services/app.service";
import { GET_PRODUCT, GET_PRODUCTS } from "./types";
import { withCallback } from "redux-saga-callback";
function* getProductSaga({ payload }: PayloadAction<{ id: string }>) {
    const {id} = payload;

    try {
      const response: IProduct= yield call(appService.getProduct, { id });
      yield put(getProductSuccess(response)); 
    } catch (error) {
      console.error("Error in getProductSaga:", error);
      yield put(getProductFail());
    }
  }


  function* getProductsSaga() {
    try {
      const response: IProduct[] = yield call(appService.getProducts);
      yield put(getProductsSuccess(response));
    } catch (error) {
      console.error("Error in getProductSaga:", error);
      yield put(getProductsFail());
    }
  }
  export default function* appSagas() {
    yield takeLatest(GET_PRODUCTS, withCallback(getProductsSaga as any));
    yield takeLatest(GET_PRODUCT, getProductSaga);
  }