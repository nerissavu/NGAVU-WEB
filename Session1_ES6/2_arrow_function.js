hello()

function hello() {
    console.log("hello");
}


// hello2() => báo lỗi vì xuất hiện biến trước khi khai báo
const hello2 = function() {
    console.log('hello')
}

const helloArr = () => {
    console.log("hello arr")
}

document.getElementById('btn').addEventListener("click",function(){
    console.log(this)
});

document.getElementById('btn').addEventListener("click",() => {
    console.log(this)
});

// const sum = (a,b) => a+b
const sum = (a,b) => {
    return a+b
};

// giống nhau nha

const divideBy = (a,b) => a / b;

