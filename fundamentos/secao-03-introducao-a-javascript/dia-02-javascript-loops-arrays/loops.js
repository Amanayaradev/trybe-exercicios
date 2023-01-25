
// for(let percorrer of numbers) {
    //     console.log(percorrer);
    // }
    
// let soma = 0;
// for(let index = 0; index < numbers.length; index += 1) {
    //     soma += numbers[index];
    // }
    // console.log(soma)
    
    // let media = 0;
    // for(let index = 0; index < numbers.length; index += 1) {
        //     media += numbers[index] / numbers.length;
        // }
        // if(media > 20) {
            //     console.log('valor maior que 20')
            // } else {
                //     console.log("valor menor ou igual 20")
                // }
                
                // let maiorNumero = numbers[0];
                
                // for(let index = 1; index < numbers.length; index += 1) {
                    //     if(maiorNumero < numbers[index]) {
                        //         maiorNumero = numbers[index]
                        //     }
                        // }
                        // console.log(maiorNumero)
                        
                        // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
                        
// let menorNumero = numbers[9];
                
// for(let index = 1; index < numbers.length; index += 1) {
    //     if(menorNumero > numbers[index]) {
        //         menorNumero = numbers[index]
        //     }
        // }
        // console.log(menorNumero)
        
        // let arrayDeNumeros = [];
        // for(let index = 1; index < 26; index += 1) {
            //     arrayDeNumeros.push(index);
            // }
            
            // for(let divisao = 0; divisao < arrayDeNumeros.length; divisao += 1) {
                //     console.log(arrayDeNumeros[divisao] / 2)
                // }
                
                
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];
for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 === 1) {
        impares.push(numbers[index]);
    }
}
if(impares % 2 === 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(impares)
}
