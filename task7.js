let values = [1,2,34,5,6,78,90];

myfunction = (values) =>
{       
    let sum = 0;
    

    values = values.map((value)=>value*value);
    console.log(values);
    values.map((value)=>
    {
        sum = sum + value
        return sum;
        
    })
    console.log(sum);
    console.log(sum/values.length)
}
myfunction(values);