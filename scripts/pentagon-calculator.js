function calculatePentagonArea(){
const perimeter = getElementValueById('pentagon-perimeter')
const apothem = getElementValueById('pentagon-apothem')
const area = 0.5 * perimeter * apothem
setInnerTextById('area-text',area)
console.log('the area of Pentagone is ' , area)
}


function getElementValueById(elementID){
    const elementInput = document.getElementById(elementID)
    const elementValue = elementInput.value
    const element = parseFloat(elementValue)
    return element
}

function setInnerTextById (elementID,value){
    const element = document.getElementById(elementID)
    element.innerText = value
}