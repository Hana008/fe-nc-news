import axios from 'axios';

const baseURL = 'https://nc-news-ltd.herokuapp.com/api'

export const getArticles = (topic) => {
    return axios.get(`${baseURL}/articles`, { params: { topic } })
        .then((response) => { return response.data })
};

export const getTopics = () => {
    return axios.get(`${baseURL}/topics`).then((response) => {
        return response.data
    })
};

export const patchVotes = (article_id, inc_votes) => {
    return axios.patch(`${baseURL}/articles/${article_id}`, {inc_votes})
}