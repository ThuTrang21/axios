import { IProduct } from '../../interfaces/app';

export interface IAppState {
  products: IProduct[]; // Danh sách sản phẩm
  isLoading: boolean; // Trạng thái đang tải
  error: string | null; // Thông báo lỗi nếu có
  product?: IProduct;
}
