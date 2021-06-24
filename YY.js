let ar = [3, 45, 35, 1, 789]
function first() {
   ar = ar.map(
       function (n) {
        return n * 2;
    });
   return ar;
}
console.log(first());


let ar2 = [3.3, 45, 35.42, 1.003, 789.09];
function second() {
    ar2 = ar2.map(
        function (n) {
            return Math.trunc(n);
        });
    return ar2;
}
console.log(second());


let ar3 = [33, 45, 35.42, 3, 9];
function third() {
    ar3 = ar3.reduce(
        function (sum,current) {
            return sum+current;
        },0);
    return ar3;
}
console.log(third());


let ar4 = [33, "kek","lol", 9];
function fourth() {
    ar4 = ar4.filter(
        function (num) {
            return typeof num === "number";
        });
    const sum = ar4.reduce(
        function (sum4,current4) {
            return sum4+current4;
        },0);
      return [ar4,sum];
}
console.log(fourth());