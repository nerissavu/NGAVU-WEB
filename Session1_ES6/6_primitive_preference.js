const foo = {};
const bar = foo;
console.log(foo == bar)

// const foo = {};
// const bar = {};
// console.log(foo == bar)

function test(arr) {
    // arr.push(1) ĐỪNG DÙNG NHÉEEEE
    const arr2 = [...arr,1]
}