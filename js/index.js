/*class user{
    
    constructor(name, lastName, pts){
            this.name = name
            this.lastName = lastName
            this.pts = pts
    }

    sayName(){
        return `${name} ${lastName}`
    }

    sayPts(){
            return `${pts}`
        }
    
}*/

function enableGift () {
    
    for (let i = 0; i < currentGift.length; i++){

        if(currentUser['pts'] >= currentGift[i]['pts']) {

            let indexString = i + 1
            indexString.toString()

            let btn = document.getElementById(`btn-iunigo${indexString}`)
            btn.disabled = false

        }

    }

}
//enableGift recorre la matriz de gifts (currentGift), luego por cada iteracion evalua si los pts del usuario son mayores o iguales a los pts requeridos por el gift a canjear ubica el boton por id (suma 1 al i y lo convierte a string para concatenarlo al id a buscar) y lo habilita.

let user1 = {
    name: 'Lisbaldy',
    lastName: 'Ojeda',
    pts: 100
}

let user2 = {
    name: 'Keimarly',
    lastName: 'Márquez',
    pts: 200
}

let user3 = {
    name: 'Nazarelis',
    lastName: 'Ojeda',
    pts: 160
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

function showData(user, idName, idPts){
    
    let userIunigo = document.createElement('h2')
    userIunigo.innerHTML = `${user['name']} ${user['lastName']}`
    document.getElementById(idName).appendChild(userIunigo)
    
    let userIunigo1 = document.createElement('h2')
    userIunigo1.innerHTML = `${user['pts']} pts`
    document.getElementById(idPts).appendChild(userIunigo1)
    
}

function showGift(gift, collapsed, id, data_target, aria_controls, aria_expanded, fatherid){
    
    let giftIunigo = document.createElement('button')
    giftIunigo.setAttribute('style', 'color: #1826c4;')
    giftIunigo.setAttribute('class', `btn btn-link ${collapsed}`)
    giftIunigo.setAttribute('type', 'button')
    giftIunigo.setAttribute('id', id)
    giftIunigo.setAttribute('data-target', `#${data_target}`)
    giftIunigo.setAttribute('aria-controls', aria_controls)
    giftIunigo.setAttribute('aria-expanded', aria_expanded)
    giftIunigo.setAttribute('data-toggle', 'collapse')
    giftIunigo.innerHTML = `${gift['name']} - ${gift['pts']}`
    document.getElementById(fatherid).appendChild(giftIunigo)
    
}

// function showGift(gift){
    
//     let giftIunigo1 = document.createElement('button')
//     giftIunigo1.setAttribute('style', 'color: #1826c4;')
//     giftIunigo1.setAttribute('class', 'btn btn-link')
//     giftIunigo1.setAttribute('type', 'button')
//     giftIunigo1.setAttribute('id', 'btn-vtv')
//     giftIunigo1.setAttribute('data-target','#collapseOne')
//     giftIunigo1.setAttribute('aria-controls', 'collapseOne')
//     giftIunigo1.setAttribute('aria-expanded', 'true')
//     giftIunigo1.setAttribute('data-toggle', 'collapse')
//     giftIunigo1.innerHTML = `${gift['name']} - ${gift['pts']}`
//     document.getElementById('h2-btn').appendChild(giftIunigo1)
    
// }

// function showGift1(gift){
    
//     let giftIunigo2 = document.createElement('button')
//     giftIunigo2.setAttribute('style', 'color: #1826c4;')
//     giftIunigo2.setAttribute('class', "btn btn-link collapsed")
//     giftIunigo2.setAttribute('type', "button")
//     giftIunigo2.setAttribute('id', 'btn-rmf')
//     giftIunigo2.setAttribute('data-target',"#collapseTwo")
//     giftIunigo2.setAttribute('aria-controls', "collapseTwo")
//     giftIunigo2.setAttribute('aria-expanded', "false")
//     giftIunigo2.setAttribute('data-toggle', 'collapse')
//     giftIunigo2.innerHTML = `${gift['name']} - ${gift['pts']}`
//     document.getElementById('h2-btn1').appendChild(giftIunigo2)
    
// }

// function showGift2(gift){
    
//     let giftIunigo3 = document.createElement('button')
//     giftIunigo3.setAttribute('style', 'color: #1826c4;')
//     giftIunigo3.setAttribute('class', 'btn btn-link')
//     giftIunigo3.setAttribute('type', 'button')
//     giftIunigo3.setAttribute('id', 'btn-fcg')
//     giftIunigo3.setAttribute('data-target', "#collapseThree")
//     giftIunigo3.setAttribute('aria-controls', "collapseThree")
//     giftIunigo3.setAttribute('aria-expanded', 'false')
//     giftIunigo3.setAttribute('data-toggle', 'collapse')
//     giftIunigo3.innerHTML = `${gift['name']} - ${gift['pts']}`
//     document.getElementById('h2-btn2').appendChild(giftIunigo3)
    
// }


showData(currentUser, 'userName', 'userPts')
showGift(gift1, null, 'btn-vtv', 'collapseOne', 'collapseOne', true, 'h2-btn')
showGift(gift2, 'collapsed', 'btn-rmf', 'collapseTwo', 'collapseTwo', false, 'h2-btn1')
showGift(gift3, 'collapsed', 'btn-fcg', 'collapseThree', 'collapseThree', false, 'h2-btn2')

// let ptsCanjeados = document.createElement('h2')
// ptsCanjeados.innerHTML = `${currentUser['pts']}`
// document.getElementById('user-pts').appendChild(ptsCanjeados)

// function restarPts () {

//     let ptsRestados = currentUser['pts'] - currentGift[i]['pts']

// }