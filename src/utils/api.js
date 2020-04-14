import axios from 'axios';

const baseURL = 'https://nc-news-ltd.herokuapp.com/api'

export const fetchArticles = (topic) => {
    return axios.get(`${baseURL}/articles`, { params: { topic } })
        .then((response) => { return response.data })
};

export const fetchTopics = () => {
    return axios.get(`${baseURL}/topics`).then((response) => {
        return response.data
    })
};