var merge;
var merge2;
merge = [1, 'data', 3, 'result'];
merge2 = ['Bejo', 'has', 4, 'sport', 'car'];
function combinator(array) {
    var result = "";
    array.map(function (array) {
        result = result + " " + array;
    });
    return result;
}
console.log(combinator(merge));
console.log(combinator(merge2));
