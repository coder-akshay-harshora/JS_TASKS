var A = ["Akshay","Harshora"];
var test = solution(A);
var index0 = test[0], index1 = test[1];
console.log(index0);
console.log(index1); 
function solution(A)
{
    var j = 0;
    var k = 0;
    var index0 = [];
    var index1 = [];
    let i = 0;
    for(i = 0;i<A.length;i++)
    {
        if(A[i]%2 == 0)
        {
            index0[j] = A[i];
            j++;
            }
        else if(A[i]%2 == 1){
            index1[k] = A[i];
            k++;
        }
    }
    return [index0,index1];
}