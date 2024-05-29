const firstList = []
const secondList = [1,2,'3',[4],true,undefined,{seven: 7}]
let length = secondList.length
console.log(length)
console.log(secondList[0], secondList[length/2],secondList[length-1])
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon'
const itCompanies = string.split(', ')
console.log(itCompanies)
for (let index = 0; index < itCompanies.length; index++) {
    itCompanies[index] = itCompanies[index].toUpperCase()
}
console.log(itCompanies)
console.log(itCompanies.toString())
console.log(itCompanies.join(', '))
const value = itCompanies.indexOf('GOOGLE')
if(value>=0)
    console.log(itCompanies[value])
else
    console.log('Company not found')
for(let index = 0; index < itCompanies.length; index++){
    const string = itCompanies[index]
    const res = string.match(/o/gi)
    if(res && res.length >= 2){
        itCompanies.splice(index, 1)
        index--
    }
}
console.log(itCompanies)
const itCompanies2 = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'.split(',')
console.log(itCompanies2.sort())
console.log(itCompanies2.reverse())
console.log(itCompanies2.slice(0,3))
console.log(itCompanies2.reverse())
console.log(itCompanies2.slice(0,3))
itCompanies2.push('Netflix')
console.log(itCompanies2)
length = itCompanies2.length
if(length % 2 == 0)
    console.log(itCompanies2.slice(length/2-1, length/2+1))
else
    console.log(itCompanies2.slice(length/2, length/2+1))
itCompanies2.shift()
console.log(itCompanies2)
length = itCompanies2.length
if(length % 2 == 0)
    console.log(itCompanies2.splice(length/2-1, 2))
else
    console.log(itCompanies2.splice(length/2, 1))
console.log(itCompanies2.pop())
console.log(itCompanies2.splice(0))