var string = prompt('capitalize only first');

function caps(string) {
    return string = string.slice(0,1).toUpperCase() + string.slice(1, string.length).toLowerCase();
}

console.log(caps(string));