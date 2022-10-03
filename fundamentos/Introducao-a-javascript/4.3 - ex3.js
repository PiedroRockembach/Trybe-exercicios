let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = '';
for (let index = 0; index < array.length; index += 1)
{
    count = 0;
    for (let indexInterno = 0; indexInterno < array[index].length; indexInterno += 1)
    {
        count += 1;
    }
    if (count > bigger.length)
    {
        bigger = array[index]
    }
}
console.log(bigger);