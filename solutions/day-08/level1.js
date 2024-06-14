const dog = {}
dog.name = 'Jack'
dog['legs'] = 17
dog.color = 'red'
dog.age = 99
dog.bark = function(){
    return 'Woof Woof!'
}
dog.breed = 'Tyranitar'
dog.getDogInfo = function(){
    return Object.values(this).join(', ')
}
