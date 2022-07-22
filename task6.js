var values = [17, 15, 32, 43];
console.log(convert(values));

function convert(values)
{
    return values.map(function(value)
    {
            totalDistanceInKilometers = value*1.60934;
            return totalDistanceInKilometers;
    });
}
