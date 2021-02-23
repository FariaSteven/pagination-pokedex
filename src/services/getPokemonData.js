async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data)
        })
    })
} 

async function getPokemon(url) {
     return new Promise((resolve, reject) => {
         fetch(url)
         .then(res => res.json())
         .then((data) => {
             resolve(data)
         })
     })
}

export { getAllPokemon, getPokemon }