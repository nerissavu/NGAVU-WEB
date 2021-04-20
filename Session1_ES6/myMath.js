const sum = (a,b) => {
    return a+b
}
const sub = (a,b) => {
    return a-b
}
const dividedBy = (a,b) => {
    return a/b
}
const multi = (a,b) => {
    return a*b
}

export {sum, sub, dividedBy, multi}
// thay bằng export default {} ok nhé
const myMath ={
    sum: sum,
    sub: sub,
    dividedBy: dividedBy,
    multi: multi,
}

export default myMath

