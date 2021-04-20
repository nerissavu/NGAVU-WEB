const arr = [1];

arr.push(2)
console.log(arr.concat(3))
console.log(arr)
console.log([...arr, 4])


const obj = {
    name: "alice",
    age: 16,
    address: {
        city: " Hanoi",
        district: "Cau Giay"
    }
}

console.log({
    ...obj,
    age: 18,
    gender:"f",
})

// destructoring
const {name, age, address:{city, district}} = obj;
console.log(name, age)

const coordinate = [0,1];
const[x,y] = coordinate

