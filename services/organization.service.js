import {apiUrl} from "../config";

export const organizationService = {
    getAll
};

const baseUrl = `${apiUrl}/organizations`;

function getAll() {
    console.log("organization.service::organizationService.getAll(): " + baseUrl)
    const requestOptions = {
        method: 'GET'
    };
    return fetch(baseUrl, requestOptions).then(handleResponse);
}

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