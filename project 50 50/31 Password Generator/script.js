const resultEle = document.getElementById('result')
const clipboardEle = document.getElementById('clipboard')
const lengthEle = document.getElementById('length')
const uppercaseEle = document.getElementById('uppercase')
const lowercaseEle = document.getElementById('lowercase')
const numbersEle = document.getElementById('numbers')
const symbolsEle = document.getElementById('symbols')
const generateEle = document.getElementById('generate')


// The static String.fromCharCode() method returns a string created from 
// the specified sequence of UTF-16 code units.

// There are 26 characters (*26) and the char code for lowercase a is 97
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) 
}

// There are 26 characters (*26) and the char code for uppercase 'a' is 65
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) 
}

// There are ten numbers (*10) and the utf code for '0' is 48 (+48)
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48) 
}

 // Generates a symbol from the given symbol string
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// an object to keep keys to the return value of the random funtions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// fires when the generateELe is clicked
generateEle.addEventListener('click', () => {
    const length = +lengthEle.value // returns the value of lengthEle as a number (+)
    // When the checkboxes are checked
    const hasLower = lowercaseEle.checked 
    const hasUpper = uppercaseEle.checked
    const hasNumber = numbersEle.checked
    const haSymbols = symbolsEle.checked
    
    resultEle.innerHTML = generatePassword( hasLower, hasUpper, 
        hasNumber, haSymbols, length)
})


// Copy generated password to the clipboard
clipboardEle.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const password = resultEle.innerText

    if(!password){
        return
    }

    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('cut')
    textArea.remove()
    alert('Password copied to clipboard')
})

// generates pass word with the given parameters
function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''

    // concatenates or add all the given items to be included in the password generated.
    const typesCount = lower + upper + number + symbol

    // Array of objects which is filtered to have the item at [0] index
    const typesArr = [{lower}, {upper}, {number}, {symbol}].
    filter(item => Object.values(item)[0])

    if(typesCount === 0){
        return ''
    }
 // iterate the typesArr for an objects key
    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
       
    // return of the final password
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

console.log(getRandomNumber())