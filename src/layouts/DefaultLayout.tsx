import { Badge, Button, Divider, Layout, Popover } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import path from "../utils/path";
import { useMemo } from "react";
import { divide, map } from "lodash";
import { useAppSelector } from "../store";
import { selectCart } from "../store/cart/selectors";

export const DefaultLayout = () => {
  const navigate = useNavigate();
  const cart = useAppSelector(selectCart);

  const menu = useMemo(
    () => [
      {
        label: "Home",
        route: path.HOME,
      },
    ],
    []
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <div className="flex flex-row justify-between w-full">
          <div>
            {map(menu, (item) => (
              <Button key={item.route} onClick={() => navigate(item.route)}>
                {item.label}
              </Button>
            ))}
          </div>
          <div>
            <Popover
              placement="bottomRight"
              title={
                <span className="text-base font-thin text-gray-300">
                  Sản Phẩm Mới Thêm
                </span>
              }
              content={
                <div className="flex flex-col gap-5 py-2">
                  {cart?.products
                    .slice(-3)
                    .reverse()
                    .map((product) => (
                      <div
                        className="flex justify-between items-center gap-5 hover:bg-gray-100 p-5 cursor-pointer"
                        key={product.product.id}
                      >
                        <img
                          src={product.product.image}
                          alt="product"
                          className="w-[3rem] h-[3rem]"
                        />
                        <p className="w-[20rem]">{product.product.title}</p>
                        <p className="italic text-gray-400">{product.product.price}$</p>
                      </div>
                    ))}

                  <div className="flex justify-between items-center px-2">
                    <p>{cart?.products.length} Thêm hàng vào giỏ</p>
                    <Button
                      type="primary"
                      onClick={() => navigate(path.CART)}>
                        Xem giỏ hàng
                      </Button>
                  </div>
                </div>
              }
            >
              <Badge count={cart?.products.length}>
                <ShoppingCartOutlined style={{ fontSize: "24px" }} />
              </Badge>
            </Popover>
          </div>
        </div>
      </Layout.Header>
      <Layout.Content style={{ padding: "24px" }}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
