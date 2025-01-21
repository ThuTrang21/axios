import axios from "../axios";

export const apiGetPost = () => axios({
  url: '/posts',
  method : 'get'
})

