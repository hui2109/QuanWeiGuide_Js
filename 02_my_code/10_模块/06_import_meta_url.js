console.log(import.meta.url)

console.log('-----------------');

console.log(new URL('../../package.json', import.meta.url))

console.log('-----------------');

console.log(new URL('../../package.json', import.meta.url).href)
