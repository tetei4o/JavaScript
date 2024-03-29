import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

export async function getAllTheaters() {
    return api.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function createTheater(theater) {
    return api.post('/data/theaters', theater)
}

export async function getDetailsByID(id) {
    return api.get('/data/theaters/' + id)
}

export async function editTheater(id, theater) {
    return api.put('/data/theaters/' + id, theater)
}

export async function deleteArticle(id) {
    return api.del('/data/theaters/' + id)
}

export async function getMyTheaters(userId) {
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}