const techList = (arr, nome) => {
    if(arr.length === 0) return "Vazio!"
    const teste = arr.sort(); //organiza em ordem alfabética
    const objarr = []
    for(i in teste){
        objarr.push(
            {
                tech: teste[i],
                name: nome,
            })
    }
    return objarr;
}
console.log(techList(['b', 'a'], 'c'))
module.exports = techList;