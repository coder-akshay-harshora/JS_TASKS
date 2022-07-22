


let variable = solution('eatBreakfast')
console.log(variable);
function solution(name)
{
    var symptoms = require("./symptoms.json");
    var goals = require("./goals.json");
    for(let i = 0;i<goals[name].symptoms.length;i++)
    {
         goals[name].symptoms[i] = symptoms[goals[name].symptoms[i]];
    }
    return goals[name];

}