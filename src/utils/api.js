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

export const patchVotes = (id, inc_votes, path) => {
    return axios.patch(`${baseURL}/${path}/${id}`, {inc_votes})
}

export const getComments = (article_id) => {
    console.log(article_id)
    return axios.get(`${baseURL}/articles/${article_id}/comments`).then((response)=>{
        return response.data
    })
}