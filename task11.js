var text = "RLR";
let temp;
let msize = 3;
var twod = [[5,9,10], [12,23,34],[45,8,19]];
//console.log(twod);

for (let i = 0; i < twod.length; i++) {
    for (let j = 0; j < i; j++) {
        temp = twod[i][j];
        twod[i][j] = twod[j][i];
        twod[j][i] = temp; 
    }
}
//console.log(twod);
for(let i = 0;i<text.length;i++)
{
let j = 0;
for(let i = 0;i<twod.length;i++)
{
    
    
        temp = twod[i][j];
        twod[i][j] = twod[i][j+(msize-1)];
        twod[i][j+(msize-1)] = temp;
    
}
}

console.log(twod)