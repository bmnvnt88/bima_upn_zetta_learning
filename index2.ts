let merge: [number, string, number, string]
let merge2: [string, string, number, string, string]
merge = [1, 'data', 3, 'result']
merge2 = ['Bejo', 'has', 4, 'sport', 'car']

function combinator(array: (string | number)[]): string {
    let result: string = "";
    array.map((array) => {
      result = result + " " + array;
    });
    return result;
  }


console.log(combinator(merge));
console.log(combinator(merge2));