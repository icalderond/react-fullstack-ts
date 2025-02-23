import axios from 'axios';
import user from '../../../backend/src/models/user';

const API_URL = 'http://localhost:5002/api/users';

export const getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const createUser = async (user: user) => {
    const response = await axios.post(API_URL, user);
    return response.data;
}

export const updateUser = async (id: number, user: user) => {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
}

export const deleteUser = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}