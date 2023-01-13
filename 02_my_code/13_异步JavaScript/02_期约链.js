// 这是一个伪函数
export function displayUserProfile(profile) {
    return profile;
}

fetch('/api/user/profile').then(response => {
    return response.json();
}).then(profile => {
    displayUserProfile(profile);
});