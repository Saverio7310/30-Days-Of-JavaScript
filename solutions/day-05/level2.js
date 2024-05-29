let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(/[.,]/g, '').split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart.indexOf('Meat') === -1)
    shoppingCart.unshift('Meat')
console.log(shoppingCart)
if(shoppingCart.indexOf('Sugar') === -1)
    shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
console.log(shoppingCart)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)