import {API_KEY, API_URL} from './weavy-constants';

//generates a token from Weavy environment
async function generateToken(username) {
    let response = await fetch(`${API_URL}/api/users/${username}/tokens`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({ name: username })
    });
    let data = await response.json();
    let token = data.access_token;
    return token
}

export {generateToken};