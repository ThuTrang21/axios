import { useEffect, useState } from "react";
import { apiGetPostById } from "../../apis";
import { useParams } from "react-router";
import { DataType } from "../home/component/types";

export const Post = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [post, setPost] = useState<DataType>({});
  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const response = await apiGetPostById(id);
          const data: DataType = response.data;
          setPost(data);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      }
    };
    fetchPost();
  }, [id]);
  return (
    <div className="text-left">
      <p>
        <span className="font-bold">UserID: </span> {post.userId}
      </p>
      <p>
        <span className="font-bold">ID: </span> {post.id}
      </p>
      <h1>
        <span className="font-bold">Title: </span>
        {post.title}
      </h1>
      <p>
        <span className="font-bold">Body </span>
        {post.body}
      </p>
    </div>
  );
};
