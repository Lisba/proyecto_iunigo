// class user{
    
    //     constructor(name, lastName, pts){
        //         this.name = name
        //         this.lastName = lastName
        //         this.pts = pts
//     }

//     sayName(){
    //         return `${name} ${lastName}`
    //     }
    
    //     sayPts(){
        //         return `${pts}`
        //     }
        
        // }
        
        // let userNew = new user (name, lastName, pts)

function enableGift (){
    
    let button = document.querySelectorAll('.btn-outline-primary')
    console.log(button)

    button.forEach(element => {
        element.forEach(() => {
            if(currentUser['pts'] < currentGift[i]['pts']){
                button.disabled= true
            }
        })
    })
    
}

let user1 = {
    name: 'Name1',
    lastName: 'LastName1',
    pts: 100
}

let user2 = {
    name: 'Name2',
    lastName: 'LastName2',
    pts: 200
}

let gift1 = {
    id: 'btn-vtv',
    name: `Verificación técnica vehicular`,
    pts: 150
}

let gift2 = {
    id: 'btn-rmf',
    name: `Recarga de Matafuegos`,
    pts: 100
}

let gift3 = {
    id: 'btn-fcg',
    name: `Funda cubregranizos`,
    pts: 200
}

let currentUser = user1
let currentGift = [gift1, gift2, gift3]

console.log(currentGift)
console.log(currentUser)


function showGift(gift){

    let giftIunigo1 = document.createElement('button')
    giftIunigo1.setAttribute('class', 'btn btn-link')
    giftIunigo1.setAttribute('type', 'button')
    giftIunigo1.setAttribute('id', 'btn-vtv')
    giftIunigo1.setAttribute('data-target','#collapseOne')
    giftIunigo1.setAttribute('aria-controls', 'collapseOne')
    giftIunigo1.setAttribute('aria-expanded', 'true')
    giftIunigo1.setAttribute('data-toggle', 'collapse')
    giftIunigo1.innerHTML = `${gift['name']} - ${gift['pts']}`
    document.getElementById('h2-btn').appendChild(giftIunigo1)

}

function showGift1(gift){

    let giftIunigo2 = document.createElement('button')
    giftIunigo2.setAttribute('class', "btn btn-link collapsed")
    giftIunigo2.setAttribute('type', "button")
    giftIunigo2.setAttribute('id', 'btn-rmf')
    giftIunigo2.setAttribute('data-target',"#collapseTwo")
    giftIunigo2.setAttribute('aria-controls', "collapseTwo")
    giftIunigo2.setAttribute('aria-expanded', "false")
    giftIunigo2.setAttribute('data-toggle', 'collapse')
    giftIunigo2.innerHTML = `${gift['name']} - ${gift['pts']}`
    document.getElementById('h2-btn1').appendChild(giftIunigo2)

}

function showGift2(gift){

    let giftIunigo3 = document.createElement('button')
    giftIunigo3.setAttribute('class', 'btn btn-link')
    giftIunigo3.setAttribute('type', 'button')
    giftIunigo3.setAttribute('id', 'btn-fcg')
    giftIunigo3.setAttribute('data-target', "#collapseThree")
    giftIunigo3.setAttribute('aria-controls', "collapseThree")
    giftIunigo3.setAttribute('aria-expanded', 'false')
    giftIunigo3.setAttribute('data-toggle', 'collapse')
    giftIunigo3.innerHTML = `${gift['name']} - ${gift['pts']}`
    document.getElementById('h2-btn2').appendChild(giftIunigo3)

}

function showData(user){

    let userIunigo1 = document.createElement('h2')
    userIunigo1.innerHTML = `${user['name']} ${user['lastName']}`
    document.getElementById('userName').appendChild(userIunigo1)

    let userIunigo2 = document.createElement('h2')
    userIunigo2.innerHTML = `${user['pts']} pts`
    document.getElementById('userPts').appendChild(userIunigo2)

}

showData(currentUser)
showGift(gift1)
showGift1(gift2)
showGift2(gift3)
