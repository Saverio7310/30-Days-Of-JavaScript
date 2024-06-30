const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
function logCountries(country){
    console.log(country)
}
//countries.forEach(logCountries)

function returnLength(country){
    return country.length
}
const lengthArray = countries.map(returnLength)
//console.log(lengthArray)

function prices(prod){
    return typeof prod.price === 'number' ? prod.price : -1
}
const priceArray = products.map(prices)
//console.log(priceArray)

function landCountries(coun){
    return coun.includes('land')
}

const landArray = countries.filter(landCountries)
//console.log(landArray)

function length6(coun){
    return coun.length === 6
}

const length6Array = countries.filter(length6)
//console.log(length6Array)

function moreThan6(coun){
    return coun.length >= 6
}

const moreThan6Array = countries.filter(moreThan6)
//console.log(moreThan6Array)

function havePrice(prod){
    return prod.price && typeof prod.price === 'number' ? prod : null 
}

const havePriceArray = products.filter(havePrice)
//console.log(havePriceArray)

function sumUp(acc, value){
    return acc + value
}

//console.log(numbers.reduce(sumUp, 0))

function createSentence(acc, value, index, array){
    const lastIndex = array.length - 1
    let separator = ', '
    if(index === lastIndex)
        separator = ' and '
    return acc + separator + value
}

//console.log(countries.reduce(createSentence, 'Estonia'))

function length7(value){
    return value.length >= 7
}

//console.log(names.some(length7))

function everyLand(country){
    return country.includes('land')
}

//console.log(countries.every(everyLand))

function first6Country(el){
    return el.length === 6
}
//console.log(countries.find(first6Country));

//console.log(countries.findIndex(first6Country));

function findNorway(el){
    return el === 'Norway'
}

//console.log(countries.findIndex(findNorway));

