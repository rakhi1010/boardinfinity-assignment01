let numbers = [10, 30, 54, 13, 16]

numbers.sort(compareFunction)

console.log(numbers)

function compareFunction(a , b)
{
    return b - a;
}