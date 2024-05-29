const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log('Min age:', ages[0])
console.log('Min age:', ages[ages.length-1])
if(ages.length%2==0)
    console.log('Median age:', (ages[ages.length/2]+ages[ages.length/2-1])/2)
else
    console.log('Median age:', ages[ages.length/2])
let avg =  0
for(let index = 0; index<ages.length; index++){
    avg+=ages[index]
}
console.log('Average age:', avg/ages.length)