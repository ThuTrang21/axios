import { useEffect, useState } from "react";
import { Button, Modal, Table, TableProps } from "antd";
import { Field, Form, Formik } from "formik";
import { Input } from "antd";
import { SearchProps } from "antd/es/input";
import { DataType } from "./component/types";
import Search from "antd/es/input/Search";
import { columns } from "./component/columns";
import * as apis from "../../apis";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<DataType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<DataType | null>(null);
  const showModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = (resetForm: any) => {
    resetForm();
  };

  const handleView = (product: DataType) => {
    setSelectedProduct(product);
  };

  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState<DataType[]>([]);

  const onSearch: SearchProps["onSearch"] = (value) => {
    // const filtered = list.filter((item) =>
    //   // item.strCategory?.toLowerCase().includes(value.toLowerCase())
    // );
    // setFiltered(filtered); // Cập nhật danh sách hiển thị
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apis.apiGetPost();
        const data: DataType[] = response.data;
        setList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full py-10">
      <div className="flex justify-evenly items-center mb-4">
        <h1 className="text-4xl font-bold py-2">Danh sách sản phẩm</h1>
        <div>
          <Search
            placeholder="Nhập tên sản phẩm ...."
            onSearch={onSearch}
            enterButton
          />
        </div>
        <Button type="primary" onClick={showModal}>
          Thêm
        </Button>
      </div>
      <Table<DataType>
        columns={columns}
        dataSource={list}
        loading={loading}
        rowKey="id"
      />
      <Modal
        open={open}
        title="Thêm sản phẩm"
        onCancel={handleClose}
        footer={null}
      >
        <Formik
          initialValues={{ name: "", price: "", image: "" }}
          onSubmit={(values, { resetForm }) => {
            setList([
              ...list,
              { ...values, idCategory: String(Number(list.length) + 1) },
            ]);
            resetForm();
            setOpen(false);
          }}
        >
          {({ resetForm }) => (
            <Form>
              <div className="mb-4">
                <label>Hình ảnh</label>
                <Field name="image">
                  {({ field }: any) => <Input {...field} />}
                </Field>
              </div>

              <div className="mb-4">
                <label>Tên sản phẩm</label>
                <Field name="name">
                  {({ field }: any) => <Input {...field} />}
                </Field>
              </div>

              <div className="mb-4">
                <label>Giá</label>
                <Field name="price">
                  {({ field }: any) => <Input {...field} type="number" />}
                </Field>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="default" onClick={() => handleReset(resetForm)}>
                  Hoàn tác
                </Button>
                <Button type="primary" htmlType="submit">
                  Thêm
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default Home;
