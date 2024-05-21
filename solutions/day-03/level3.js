const today = new Date()
    console.log('Prettified time format')
    const year = today.getFullYear()
    const month = today.getMonth()+1
    const day = today.getDate()
    const hours = today.getHours()
    const minutes = today.getMinutes()
    const check = []
    check.push(month, day, hours, minutes)
    for(let x = 0; x < check.length; x++){
        if(check[x] < 10)
            check[x] = `0${check[x]}`
    }
    console.log(`${year}-${check[0]}-${check[1]} ${check[2]}:${check[3]}`)