let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = '';
let smaller = array[0];
for (let index = 0; index < array.length; index += 1)
{
    count = 0;
   
    for (let indexInterno = 0; indexInterno < array[index].length; indexInterno += 1)
    {
        count += 1;
        

    }
    if (count > bigger.length)
        {
            bigger = array[index];
        }
        if (count < smaller.length)
        {
            smaller = array[index];
        }
        
    

}
console.log(bigger);
console.log(smaller);