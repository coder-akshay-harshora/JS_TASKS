var A = [1,3,6,4,1,2];
var result = solution(A);
console.log(result);
function solution(A)
{ 
    let Obj = {};
    for(let i = 0;i<A.length;i++)
    {
        Obj[A[i]] = true;
    }
    let i = 1;
    while(true)
    {
    if(!Obj[i])
    {
        break;
        
    }
    else{

        i++;
    }
    
    }
    
    return i;

}