var snames = [" avengers", "   captain_america", "ironman   ", " black panther   "];
console.log(cleannames(snames))

function cleannames(snames) {
    return snames.map(function (name) {
        return name.trim();
    })
}

