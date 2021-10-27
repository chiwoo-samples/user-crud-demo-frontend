import { apiUrl } from 'config';

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

export const userService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const baseUrl = `${apiUrl}/users`;

function getAll() {
    const requestOptions = {
        method: 'GET'
    };
    console.log("getAll(): " + baseUrl)
    return fetch(baseUrl, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(`${baseUrl}/${id}`, requestOptions).then(handleResponse);
}

function create(params) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    return fetch(baseUrl, requestOptions).then(handleResponse);
}

function update(id, params) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    return fetch(`${baseUrl}/${id}`, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(`${baseUrl}/${id}`, requestOptions).then(handleResponse);
}
