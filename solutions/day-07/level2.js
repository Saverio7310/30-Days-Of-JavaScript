function solveQuadratic(a, b, c){
    const s = new Set()
    const firstElem = -b/(2*a)
    const secondElem = Math.sqrt(b**2-4*a*c)/2*a
    s.add(firstElem+secondElem)
    s.add(firstElem-secondElem)
    return s
}
function printArray(arr){
    for (const el of arr) {
        console.log(el)
    }
}
function showDateTime(){
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minute = date.getMinutes()
    console.log(`${day}/${month}/${year} ${hour}:${minute}`)
}
function reverseArray(arr){
    for (let index = 0; index < arr.length/2; index++) {
        const t = arr[index];
        arr[index] = arr[arr.length-index-1]
        arr[arr.length-index-1] = t
    }
}
function evensAndOdds(num){
    let odds = 0
    let evens = 0
    if(num%2>0){
        odds++
        num--
    }
    odds+=num/2
    evens+=num/2+1
    console.log(`The number of odds are ${odds}`)
    console.log(`The number of evens are ${evens}`, '\n')
}
function sumOfNNumbers(){
    let sum = 0
    for (const num of arguments) {
        sum+=num
    }
    return sum
}
const sumOfNNumbersArrow = (...args) => {
    let sum = 0
    for (const num of args) {
        sum+=num
    }
    return sum
}
function randomUserIp(){
    const IP = []
    for(let i=0; i<4; i++){
        IP.push(Math.round(Math.random()*255))
    }
    return IP.join('.')
}
console.log(randomUserIp())