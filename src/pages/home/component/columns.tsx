import { ColumnType } from "antd/es/table";
import { DataType } from "./types";
import { Button } from "antd";

export const columns: ColumnType<DataType>[] = [
    {
      title: "Mã User",
      dataIndex: "userId",
      key: "userId",
      width: 150,
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 400,
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
      width: 400,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex gap-2">
          <Button>Xem chi Tiết</Button>
          <Button>Sửa</Button>
          <Button>Xóa</Button>
        </div>
      ),
      width: 200,
    },
  ];