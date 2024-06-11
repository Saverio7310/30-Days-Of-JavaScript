function fullName(){
    console.log('My name is Giovanni Giorgio, but everybody can call me Giorgio')
}
function fillNameParams(firstName, lastName){
    return `Your name is ${firstName} ${lastName}`
}
function addNumbers(n1, n2){
    return n1 + n2
}
function areaOfRectangle(width, length){
    return width*length
}
function perimeterOfRectangle(width, length){
    return 2*(width+length)
}
function volumeOfRectPrism(width, length, height){
    return areaOfRectangle(width,length)*height
}
const areaOfCircle = function(radius){
    return Math.PI*(radius**2)
}
const circumOfCircle = radius => {
    return Math.PI * 2 * radius
}
const density = (mass, volume) => {
    return mass/volume
}
function BMI(weight, height){
    const bmi = (weight/height**2).toFixed(1)
    console.log(bmi)
    let bmiValue
    if(bmi < 18.5)
        bmiValue = 'underweight'
    else if(bmi >= 18.5 && bmi <= 24.9)
        bmiValue = 'normal weight'
    else if(bmi >= 25 && bmi <= 29.9)
        bmiValue = 'overweight'
    else if(bmi >= 30)
        bmiValue = 'obese'
    return bmiValue
}