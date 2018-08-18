import axios from 'axios';

export default {
  user: {
    enter: (data) => {
      return axios.post('/api/enter', {data}).then(res => res.data.user)
    }
  },
  admin: {
    addPhoto: (data) => {
      return axios.post('/api/add-photo', {data}).then(res => res.data.photo)
    },
    getPhotos: () => {
      return axios.get('/api/get-all-photos').then(res => res.data.photos)
    },
    delPhoto: (id) => {
      return axios.delete(`/api/del-photo/${id}`).then(res => res.data.photos)
    },
    addQuote: (data) => {
      return axios.post('/api/add-quote', {data}).then(res => res.data.quotes)
    },
    getQuotes: () => {
      return axios.get('/api/get-all-quotes').then(res => res.data.quotes)
    },
    delQuote: (id) => {
      return axios.delete(`/api/del-quote/${id}`).then(res => res.data.quotes)
    },
    addVideo: (data) => {
      return axios.post('/api/add-video', {data}).then(res => res.data.videos)
    },
    getVideos: () => {
      return axios.get('/api/get-all-videos').then(res => res.data.videos)
    },
    delVideo: (id) => {
      return axios.delete(`/api/del-video/${id}`).then(res => res.data.videos)
    },
    addArticle: (data) => {
      return axios.post('/api/add-article', {data}).then(res => res.data.articles)
    },
    getArticles: () => {
      return axios.get('/api/get-all-articles').then(res => res.data.articles)
    },
    delArticle: (id) => {
      return axios.delete(`/api/del-article/${id}`).then(res => res.data.articles)
    },
    sendMail: (data) => {
      return axios.post(`/api/send-mail`, { data }).then(res => res.data)
    }
  },
}