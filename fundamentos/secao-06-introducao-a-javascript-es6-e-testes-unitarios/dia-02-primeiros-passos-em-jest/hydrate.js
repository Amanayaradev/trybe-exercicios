function hydrate(numBebida){
    const ourNumbers = numBebida.match(/\d/g).join("")
    let copos = 0;
    for(i in ourNumbers){
        copos += Number(ourNumbers[i])
    }    
    if(copos <= 1){
        return `${copos} copo de água`;
    } else {
        return `${copos} copos de água`
    }
}
console.log(hydrate('1 bebida '))

module.exports = hydrate;