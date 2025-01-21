import axios from "../axios";

export const apiGetPosts = () => axios({
  url: '/posts',
  method : 'get'
})


export const apiGetPostById = (id: string) => axios({
  url: `/posts/${id}`,
  method: 'get'
});
