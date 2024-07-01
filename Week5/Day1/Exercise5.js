const family = {
    homer: ['father', 40],
    marge: ['mother', 38],
    bart: ['son', 10],
    lisa: ['dauther', 8],
    maggie: ['baby', 1]
}

for (let keys of Object.keys(family)) {
    console.log(keys)
}

for (let values of Object.values(family)) {
    console.log(values)
}