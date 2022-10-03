// 01

    // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    // for (let index = 0; index < numbers.length; index  1)
    // {
    //     console.log(numbers[index]);
    // }

// 02
    // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    // let soma = 0;
    // for (let index = 0; index < numbers.length; index  += 1)
    // {
    //     soma += numbers[index];
    // }
    // console.log(soma);
// 03
    // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    // let soma = 0;
    // for (let index = 0; index < numbers.length; index  += 1)
    // {
    //     soma += numbers[index];
        
    // }
    // let res = soma / numbers.length;
    // console.log(res);
// 04 
    // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    // let soma = 0;
    // for (let index = 0; index < numbers.length; index  += 1)
    // {
    //     soma += numbers[index];
        
    // }
    // let res = soma / numbers.length;
    // console.log(res);
// 05
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let maior = 0;
    for (let index = 0; index < numbers.length; index  += 1)
    {
        let teste = 0;
        for (let indexInterno = 0; indexInterno < numbers.length; indexInterno += 1)
        {
            if(numbers[index] >= numbers[indexInterno] ){
                teste += 1
            }
            if(teste == numbers.length)
            {
                maior = numbers[index];
            }
            
        }
        
    }

    // let res = soma / numbers.length;
    console.log(maior);