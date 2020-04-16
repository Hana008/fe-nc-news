import axios from 'axios';

const baseURL = 'https://nc-news-ltd.herokuapp.com/api'

export const getArticles = (topic, sort_by, order) => {
    return axios.get(`${baseURL}/articles`, { params: { topic, sort_by, order } })
        .then((response) => {
            return response.data
        })
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
    return axios.get(`${baseURL}/articles/${article_id}/comments`, { params: { sort_by: sort, order: order } })
        .then((response) => {
            return response.data
        })
};

export const postComment = (comment, article_id, user) => {
    return axios.post(`${baseURL}/articles/${article_id}/comments`, { username: user, body: comment }).then((response) => {
        return response.data.comment
    })
};

export const deleteComment = (comment_id) => {
    return axios.delete(`${baseURL}/comments/${comment_id}`)
};

export const getArticle = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}`)
        .then((response) => {
            return response.data.article
        })
};