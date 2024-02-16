function calculateParallelogramArea(){
    const base = getElementValueById('parallelogram-base')
    const height = getElementValueById('parallelogram-height')
    const area = base * height
    setInnerTextById('area-text',area)
    console.log('the area of parallelogram is ', area)
}

function getElementValueById(elementID){
    const elementInput = document.getElementById(elementID)
    const inputText = elementInput.value
    const element = parseFloat(inputText)
    return element
}

function setInnerTextById(elementID, value){
    const element = document.getElementById(elementID)
    element.innerText = value
}