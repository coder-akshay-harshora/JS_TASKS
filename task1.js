// var list1  = [];
// var i = 0;
// var size = 6;
// for(i = 0;i<size;i++)
// {
//     list1[i] = prompt("Enter element"+(i+1));
// }
var list = [20,4.5,30,54,39];
var result = solution(list);
function solution(list)
{
let sum = 0;

let i = 0;
for(i = 0;i<list.length;i++)
{
sum = sum + list[i];
}
return sum;
}
console.log(result);