import { IProduct } from "../interfaces/app";
import { privateRequest } from "../utils/request";

export const appService = {
    getProducts: (): Promise<IProduct[]> =>
      privateRequest.request({
        method: 'GET',
        url: '/products', // URL API
      }),
      getProduct: ({ id }: { id: string }):Promise<IProduct> =>
        privateRequest.request({
          method: 'GET',
          url: `/products/${id}`, // URL API
        }),
  };