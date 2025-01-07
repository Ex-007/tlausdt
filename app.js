

// EXTRACTING THE PARAMETERS FROM THE URL
const url = new URL(window.location.href)
const price = url.searchParams.get('price')
const returnDet = url.searchParams.get('return')


// UPDATE THE NOTE DETAILS
const updateDetails = () => {
    let comingPrice = document.querySelector('.comingPrice')
    let comingReturn = document.querySelector('.comingReturn')

    comingPrice.textContent = price
    comingReturn.textContent = returnDet.toString()
}
updateDetails()

// https://restfulcountries.com /api/v1/countries/Nigeria

// FETCHING COUNTRIES

let regi = document.getElementById('region')

// yg27t12JnzbxHyTjY7vEgDScrlUEF3u0MMvZAiEW
fetch("https://countryapi.io/api/all?apikey=yg27t12JnzbxHyTjY7vEgDScrlUEF3u0MMvZAiEW")
.then(res => {
    return res.json()
})
.then(data => {
    // console.log(data);
    
    let region = document.getElementById('region')
    data.forEach(country => {
        let option = document.createElement('option')
        option.textContent = country.name
        console.log(country)
        region.appendChild(option)
    })
})
.catch(err => console.log(err))



// GETTING THE CUSTOMER'S DETAILS
let first = document.getElementById('firstname')
let last = document.getElementById('lastname')
let emai = document.getElementById('email')
let payNowBtn = document.getElementById('payNowBtn')
let paymentWallets = document.querySelector('.paymentWallets')

// THE PAY NOW FUNCTIONALITY AND SECURITY CHECK
payNowBtn.addEventListener('click', () => {
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let region = document.getElementById('region').value
    
    if(firstname == ''){
        first.style.border = '2px solid red'
        return
    }else{
        
        first.style.border = '2px solid goldenrod'
    }

    if(lastname == ''){
        last.style.border = '2px solid red'
        return
    }else{
        
        last.style.border = '2px solid goldenrod'
    }
    if(email == ''){
        emai.style.border = '2px solid red'
        return
    }else{
        
        emai.style.border = '2px solid goldenrod'
    }
    if(region == 'Country/Region'){
        regi.style.border = '2px solid red'
        return
    }else{
        
        regi.style.border = '2px solid goldenrod'
    }

    paymentWallets.style.display = 'flex'
})


// THE WALLET COPY FUNCTIONALITY
let firstWallet = document.querySelector('.firstWallet')
let secondWallet = document.querySelector('.secondWallet')
let thirdWallet = document.querySelector('.thirdWallet')
let cancelHead = document.querySelector('.cancelHead')
let copied = document.querySelector('.copied')

let firstWalletCopy = document.querySelector('.firstWalletCopy')
let secondWalletCopy = document.querySelector('.secondWalletCopy')
let thirdWalletCopy = document.querySelector('.thirdWalletCopy')

firstWalletCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(firstWallet.textContent)
    copied.style.display = 'flex'
    setTimeout(() => {
        copied.style.display = 'none'
    }, 1500);
})

secondWalletCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(secondWallet.textContent)
    copied.style.display = 'flex'
    setTimeout(() => {
        copied.style.display = 'none'
    }, 1500);
})

thirdWalletCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(thirdWallet.textContent)
    copied.style.display = 'flex'
    setTimeout(() => {
        copied.style.display = 'none'
    }, 1500);
})


// THE CANCEL BUTTON FUNCTIONALITY
cancelHead.addEventListener('click', () => {
    paymentWallets.style.display = 'none'
})



