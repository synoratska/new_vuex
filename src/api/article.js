import axios from '@/api/axios'

const getArticle = (slug) => {
  return axios.get(`/articles/${slug}`).then((res) => res.data.article)
}

const deleteArticle = slug => {
  return axios.delete(`/articles/${slug}`)
}

const createArticle = articleInput => {
  return axios.post('/articles', {article: articleInput}). then(res => res.data.article)
}


export default {
 getArticle,
 deleteArticle,
 createArticle
}