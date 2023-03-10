import axios from '@/api/axios'

const getArticle = (slug) => {
  return axios.get(`/articles/${slug}`).then((res) => res.data.article)
}


const createArticle = (articleInput) => {
  return axios
    .post('/articles', { article: articleInput })
    .then((res) => res.data.article)
}

const updateArticle = (slug, articleInput) => {
  return axios
    .put(`/articles/${slug}`, { article: articleInput })
    .then((res) => res.data.article)
}

const deleteArticle = (slug) => {
  return axios.delete(`/articles/${slug}`)
}


export default {
  getArticle,
  deleteArticle,
  createArticle,
  updateArticle,
}

