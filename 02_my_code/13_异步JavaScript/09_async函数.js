function displayHighScore(a) {
    return a;
}

async function getHighScore() {
    let response = fetch('/api/user/profile');
    let profile = await response.json();
    return profile.highscore;
}
displayHighScore(await getHighScore());

