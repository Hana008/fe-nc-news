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
    return axios.patch(`${baseURL}/${path}/${id}`, { inc_votes })
};

export const getComments = (article_id, sort, order) => {
    console.log('getting...', sort)
    return axios.get(`${baseURL}/articles/${article_id}/comments`, {sort_by: sort, order: sort || order}).then((response) => {
        return response.data
    })
};

export const postComment = (comment, article_id, user) => {
    return axios.post(`${baseURL}/articles/${article_id}/comments`, { username: user, body: comment })
};

export const deleteComment = (comment_id) => {
    return axios.delete(`${baseURL}/comments/${comment_id}`)
}