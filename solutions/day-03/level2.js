window.onload = init
function init() {
    const buttonTriangle = document.getElementById('triangleArea')
    const H2Triangle = document.getElementById('H2Triangle')
    buttonTriangle.addEventListener('click', function(){
        const height = prompt('Insert triangle height', '0.1')
        const base = prompt('insert triangle base', '0.1')
        const area = base * height / 2
        H2Triangle.textContent = `Triangle area: ${area}`
    })

    const buttonCircle = document.getElementById('circleData')
    const h2Circle = document.getElementById('H2Circle')
    buttonCircle.addEventListener('click', function(){
        const radius = prompt('Insert circle radius', '0.1')
        const area = (Math.PI * radius**2).toFixed(2)
        const circumference = (2 * radius * Math.PI).toFixed(2)
        h2Circle.textContent = `Circle area: ${area}. Circle circumference: ${circumference}`
    })

    //get the slope of a line
    function getSlope({x1, y1}, {x2, y2}){
        return (y2-y1)/(x2-x1)
    }
    function getPoints(){
        const res = []
        for(let x = 1; x < 3; x++){
            const point = {}
            point[`x${x}`] = x
            point[`y${x}`] = 2*x-2
            res.push(point)
        }
        return res
    }
    console.log('Slope of a line', getSlope(...getPoints()))

    //calculate y
    function getP0(a, b, c){
        const res = []
        res.push(-b/2*a)
        res.push(-(b**2 - 4*a*c)/4*a)
        return res
    }

    console.log('Par', getP0(1, 6, 9))

    const buttonNames = document.getElementById('namesLength')
    const H2Names = document.getElementById('H2Names')
    buttonNames.addEventListener('click', function(){
        const firstName = prompt('Insert your first name', 'Hanna')
        const familyName = prompt('Insert your family name', 'Smith')
        const strings = []
        if(firstName.length > familyName.length)
            strings.push('fisrt name', firstName, 'family name', familyName)
        else
            strings.push('family name', familyName, 'fisrt name', firstName)
        H2Names.textContent = `Your ${strings[0]}, ${strings[1]}  is longer than your ${strings[2]}, ${strings[3]}`
    })

    const buttonAge = document.getElementById('age')
    const H3Age = document.getElementById('H3Age')
    buttonAge.addEventListener('click', function(){
        const age = prompt('Insert your year of birth', '1980')
        const actualYear = new Date().getFullYear()
        if(actualYear-age > 100)
            H3Age.textContent = 'You are too fucking old'
        else if(actualYear-age < 18)
            H3Age.textContent = 'Go play with legos, kid'
        else
            H3Age.textContent = 'You can drive, bruh'
    })    
}