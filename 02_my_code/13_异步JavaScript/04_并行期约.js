Promise.allSettled([Promise.resolve(1), Promise.reject(2), 3]).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})