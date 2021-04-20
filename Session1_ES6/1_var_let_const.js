var name = "mindx"
name = "web50"
console.log(name)
// biến có thể gán lại được
// khai báo phải đặt trước, không thì không ra lỗi

let foo = "foo"
foo = "bar"
console.log(foo)
// khai báo phải đặt trước, không thì sẽ ra lỗi => fix bug của var


const test = "test"

function testFunc() {
    if(true){
        var x=1; // function scope 
        let y=2;
    }
    console.log(x)
    console.log(y)
}
// ĐỌC LẠI ĐI NHÉ
test()