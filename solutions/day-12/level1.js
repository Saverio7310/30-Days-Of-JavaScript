const incomeText = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'
const [monthlySalary, annualBonus, monthlyCourses] = incomeText.match(/\d+/g)
console.log('Income:', (parseInt(monthlySalary)+parseInt(monthlyCourses))*12+parseInt(annualBonus));

const pointsString = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
const points = pointsString.match(/-?\d+/g)
const nums = points.map((val) => parseInt(val))
console.log('Max distance:', Math.abs(nums[nums.length-1])-nums[0]);

/**
 * 
 * @param {string} str 
 */
function is_valid_variable(str){
    const initialNum = /^[0-9]/
    if(initialNum.test(str))
        return false
    const notAllowedChars = /[^a-zA-Z0-9$_]/
    if(notAllowedChars.test(str))
        return false
    return true
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))