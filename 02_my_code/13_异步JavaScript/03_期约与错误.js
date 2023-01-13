import {displayUserProfile} from './02_期约链.js';

function displayLoggedOutProfilePage() {
    return null;
}

function displayErrorMessage() {
    return null;
}

class NetworkError {
}

fetch('/api/user/profile').then(response => {
    if (!response.ok) {
        return null;
    }

    let type = response.headers.get('content-type');
    if (type !== 'application/json') {
        throw new TypeError(`Expected JSON, got ${type}.`);
    }

    return response.json();
}).then(profile => {
    if (profile) {
        displayUserProfile(profile);
    } else {
        displayLoggedOutProfilePage();
    }
}).catch(e => {
    if (e instanceof NetworkError) {
        displayErrorMessage('Check your internet connection.');
    } else if (e instanceof TypeError) {
        displayErrorMessage('Something is wrong with our server!');
    } else {
        console.error(e);
    }
});
