let ar = [3, 45, 35, 1, 789]
function first() {
    return ar = ar.map (n => n * 2)
}
console.log(first());


let ar2 = [3.3, 45, 35.42, 1.003, 789.09];
function second() {
    return ar2 = ar2.map(n => Math.trunc(n))
}
console.log(second());


let ar3 = [33, 45, 35.42, 3, 9];
function third() {
    return ar3 = ar3.reduce((sum,current) => sum+current,0)
}
console.log(third());


let ar4 = [33, "kek","lol", 9];
function fourth() {
    ar4 = ar4.filter( num => typeof num === "number");
    return sum = ar4.reduce((sum4,current4) => sum4+current4,0)
}
console.log(fourth());