console.log(typeof 10 == typeof '10')
console.log('10' == 10)
console.log(parseInt('9.8') == 10)
const truthy = [1, 'dsf', true]
truthy.forEach(el => {
    if(el)
        console.log(true)
})
const falsy = [0, 0n, NaN, null, undefined, false, '']
falsy.forEach(el => {
    if(!el)
        console.log(false)
})
const date = new Date()
console.log('year', date.getFullYear())
console.log('month', date.getMonth()+1)
console.log('day', date.getDate())
console.log('day\'s number', date.getDay())
console.log('hour', date.getHours())
console.log('minutes', date.getMinutes())
console.log('timestamp', date.getTime())