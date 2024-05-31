const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  let str = '';
for(let i = 65; i <= 90; i++){
    str += String.fromCharCode(i)
}
for(let i = 97; i <= 122; i++){
    str += String.fromCharCode(i)
}
for(let i = 0; i <= 9; i++){
    str += i.toString()
}
str += ' !@#$%^&*()_+-=[]{}|;:,.<>?/'
let strRes = ''
while(strRes.length != 5){
    strRes += str.charAt(Math.round(Math.random()*str.length))
}
console.log(strRes);

const ref = 'abcdef0123456789'
let finalHex = '#'
while(finalHex.length != 7){
    finalHex += ref.charAt(Math.round(Math.random()*(ref.length-1)))
}
console.log(finalHex)
const countriesInfo = []
for (const country of countries) {
    const newEntry = []
    newEntry.push(country, country.toUpperCase().slice(0, 3), country.length)
    countriesInfo.push(newEntry)
}
console.table(countriesInfo)
const landCountries = []
for (const cInfo of countriesInfo) {
    if(cInfo[0].includes('land'))
        landCountries.push(cInfo[0])
}
if(landCountries.length == 0)
    console.log('All these countries are without land')
else
    console.log(landCountries)