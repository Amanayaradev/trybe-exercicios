const obj = [
    { id: 28753897538, nome: 'hdscfsjhd',},
    { id: 28753897539, nome: 'hdscf11111',},
    { id: 28753897540, nome: 'hdscfs2222',},
    { id: 28753897541, nome: 'hdscf33333'}
]

const getSpeciesByIds = (ids) => {
    return obj.some((objItem) => {
        objItem.id === ids;
    })
}
console.log(getSpeciesByIds(28753897538));