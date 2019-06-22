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

    let button = document.getElementById('btn-iunigo')
    button.setAttribute('disabled', 'true')

    if(currentUser['pts'] < currentGift['pts']){
        button.disabled = true
        button.setAttribute('style', 'background-color: red;')
    } else {
        button.disabled = false
    }
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
let currentGift = gift1

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

    let giftIunigo1 = document.createElement('button')
    giftIunigo1.setAttribute('class', "btn btn-link collapsed")
    giftIunigo1.setAttribute('type', "button")
    giftIunigo1.setAttribute('id', 'btn-rmt')
    giftIunigo1.setAttribute('data-target',"#collapseTwo")
    giftIunigo1.setAttribute('aria-controls', "collapseTwo")
    giftIunigo1.setAttribute('aria-expanded', "false")
    giftIunigo1.setAttribute('data-toggle', 'collapse')
    giftIunigo1.innerHTML = `${gift['name']} - ${gift['pts']}`
    document.getElementById('h2-btn1').appendChild(giftIunigo1)

}

function showGift2(gift){

    let giftIunigo1 = document.createElement('button')
    giftIunigo1.setAttribute('class', 'btn btn-link')
    giftIunigo1.setAttribute('type', 'button')
    giftIunigo1.setAttribute('id', 'btn-fcg')
    giftIunigo1.setAttribute('data-target', "#collapseThree")
    giftIunigo1.setAttribute('aria-controls', "collapseThree")
    giftIunigo1.setAttribute('aria-expanded', 'false')
    giftIunigo1.setAttribute('data-toggle', 'collapse')
    giftIunigo1.innerHTML = `${gift['name']} - ${gift['pts']}`
    document.getElementById('h2-btn2').appendChild(giftIunigo1)

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
showGift(currentGift)
showGift1(gift2)
showGift2(gift3)