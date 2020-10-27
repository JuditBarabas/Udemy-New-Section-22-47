function cleanNames(arr) {
    return arr.map(function(el) {
        return el.trim();
    });
}

console.log('Test:');
console.log(cleanNames([" timothee", "    darth_hater", "sassyfrassy    ", " elton john   "]));
