let numbers = [1, 2, 3, 4,5,6,7,8,9,10,12,16];
numbers = numbers.filter((item)=>item%2 == 0)
let temp;
console.log(numbers)
numbers = numbers.map((item)=>
{
temp = (item/2)/2;
if(temp%2 == 0)
{
    return item;
}
else
{
    return 0;
}
}
)
console.log(numbers);
console.log(numbers.reduce((total, num)=>total + num))