<template>
  <div>
    <div class="makePaymentForm" v-if="showPaymentBox">
      <h4>Proceed with your payment by filling these details</h4>
      <h5>Product Key and Login Id will be sent to your email</h5>
      <div class="formToFill">
        <input type="text" id="firstname" placeholder="Your Firstname" v-model="payDetails.firstname">
        <input type="text" id="lastname" placeholder="Your Lastname" v-model="payDetails.lastname">
        <input type="email" id="email" placeholder="Your Email" v-model="payDetails.email">
        <select id="region" v-model="payDetails.country">
          <option>Country/Region</option>
          <option value="AF">Afghanistan</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AS">American Samoa</option>
          <option value="AD">Andorra</option>
          <option value="AO">Angola</option>
          <option value="AI">Anguilla</option>
          <option value="AQ">Antarctica</option>
          <option value="AG">Antigua and Barbuda</option>
          <option value="AR">Argentina</option>
          <option value="AM">Armenia</option>
          <option value="AW">Aruba</option>
          <option value="AU">Australia</option>
          <option value="AT">Austria</option>
          <option value="AZ">Azerbaijan</option>
          <option value="BS">Bahamas</option>
          <option value="BH">Bahrain</option>
          <option value="BD">Bangladesh</option>
          <option value="BB">Barbados</option>
          <option value="BY">Belarus</option>
          <option value="BE">Belgium</option>
          <option value="BZ">Belize</option>
          <option value="BJ">Benin</option>
          <option value="BM">Bermuda</option>
          <option value="BT">Bhutan</option>
          <option value="BO">Bolivia</option>
          <option value="BA">Bosnia and Herzegovina</option>
          <option value="BW">Botswana</option>
          <option value="BR">Brazil</option>
          <option value="IO">British Indian Ocean Territory</option>
          <option value="VG">British Virgin Islands</option>
          <option value="BN">Brunei</option>
          <option value="BG">Bulgaria</option>
          <option value="BF">Burkina Faso</option>
          <option value="BI">Burundi</option>
          <option value="CV">Cabo Verde</option>
          <option value="KH">Cambodia</option>
          <option value="CM">Cameroon</option>
          <option value="CA">Canada</option>
          <option value="KY">Cayman Islands</option>
          <option value="CF">Central African Republic</option>
          <option value="TD">Chad</option>
          <option value="CL">Chile</option>
          <option value="CN">China</option>
          <option value="CO">Colombia</option>
          <option value="KM">Comoros</option>
          <option value="CG">Congo (Brazzaville)</option>
          <option value="CD">Congo (Kinshasa)</option>
          <option value="CK">Cook Islands</option>
          <option value="CR">Costa Rica</option>
          <option value="CI">Côte d’Ivoire</option>
          <option value="HR">Croatia</option>
          <option value="CU">Cuba</option>
          <option value="CW">Curaçao</option>
          <option value="CY">Cyprus</option>
          <option value="CZ">Czechia</option>
          <option value="DK">Denmark</option>
          <option value="DJ">Djibouti</option>
          <option value="DM">Dominica</option>
          <option value="DO">Dominican Republic</option>
          <option value="EC">Ecuador</option>
          <option value="EG">Egypt</option>
          <option value="SV">El Salvador</option>
          <option value="GQ">Equatorial Guinea</option>
          <option value="ER">Eritrea</option>
          <option value="EE">Estonia</option>
          <option value="SZ">Eswatini</option>
          <option value="ET">Ethiopia</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GF">French Guiana</option>
          <option value="PF">French Polynesia</option>
          <option value="GA">Gabon</option>
          <option value="GM">Gambia</option>
          <option value="GE">Georgia</option>
          <option value="DE">Germany</option>
          <option value="GH">Ghana</option>
          <option value="GI">Gibraltar</option>
          <option value="GR">Greece</option>
          <option value="GL">Greenland</option>
          <option value="GD">Grenada</option>
          <option value="GP">Guadeloupe</option>
          <option value="GU">Guam</option>
          <option value="GT">Guatemala</option>
          <option value="GG">Guernsey</option>
          <option value="GN">Guinea</option>
          <option value="GW">Guinea-Bissau</option>
          <option value="GY">Guyana</option>
          <option value="HT">Haiti</option>
          <option value="VA">Holy See</option>
          <option value="HN">Honduras</option>
          <option value="HK">Hong Kong</option>
          <option value="HU">Hungary</option>
          <option value="IS">Iceland</option>
          <option value="IN">India</option>
          <option value="ID">Indonesia</option>
          <option value="IR">Iran</option>
          <option value="IQ">Iraq</option>
          <option value="IE">Ireland</option>
          <option value="IM">Isle of Man</option>
          <option value="IL">Israel</option>
          <option value="IT">Italy</option>
          <option value="JM">Jamaica</option>
          <option value="JP">Japan</option>
          <option value="JE">Jersey</option>
          <option value="JO">Jordan</option>
          <option value="KZ">Kazakhstan</option>
          <option value="KE">Kenya</option>
          <option value="KI">Kiribati</option>
          <option value="KP">Korea (North)</option>
          <option value="KR">Korea (South)</option>
          <option value="KW">Kuwait</option>
          <option value="KG">Kyrgyzstan</option>
          <option value="LA">Laos</option>
          <option value="LV">Latvia</option>
          <option value="LB">Lebanon</option>
          <option value="LS">Lesotho</option>
          <option value="LR">Liberia</option>
          <option value="LY">Libya</option>
          <option value="LI">Liechtenstein</option>
          <option value="LT">Lithuania</option>
          <option value="LU">Luxembourg</option>
          <option value="MG">Madagascar</option>
          <option value="MW">Malawi</option>
          <option value="MY">Malaysia</option>
          <option value="MV">Maldives</option>
          <option value="ML">Mali</option>
          <option value="MT">Malta</option>
          <option value="MH">Marshall Islands</option>
          <option value="MQ">Martinique</option>
          <option value="MR">Mauritania</option>
          <option value="MU">Mauritius</option>
          <option value="YT">Mayotte</option>
          <option value="MX">Mexico</option>
          <option value="FM">Micronesia</option>
          <option value="MD">Moldova</option>
          <option value="MC">Monaco</option>
          <option value="MN">Mongolia</option>
          <option value="ME">Montenegro</option>
          <option value="MS">Montserrat</option>
          <option value="MA">Morocco</option>
          <option value="MZ">Mozambique</option>
          <option value="MM">Myanmar</option>
          <option value="NA">Namibia</option>
          <option value="NR">Nauru</option>
          <option value="NP">Nepal</option>
          <option value="NL">Netherlands</option>
          <option value="NC">New Caledonia</option>
          <option value="NZ">New Zealand</option>
          <option value="NI">Nicaragua</option>
          <option value="NE">Niger</option>
          <option value="NG">Nigeria</option>
          <option value="NU">Niue</option>
          <option value="MK">North Macedonia</option>
          <option value="NO">Norway</option>
          <option value="OM">Oman</option>
          <option value="PK">Pakistan</option>
          <option value="PW">Palau</option>
          <option value="PS">Palestine</option>
          <option value="PA">Panama</option>
          <option value="PG">Papua New Guinea</option>
          <option value="PY">Paraguay</option>
          <option value="PE">Peru</option>
          <option value="PH">Philippines</option>
          <option value="PL">Poland</option>
          <option value="PT">Portugal</option>
          <option value="PR">Puerto Rico</option>
          <option value="QA">Qatar</option>
          <option value="RO">Romania</option>
          <option value="RU">Russia</option>
          <option value="RW">Rwanda</option>
          <option value="KN">Saint Kitts and Nevis</option>
          <option value="LC">Saint Lucia</option>
          <option value="VC">Saint Vincent and the Grenadines</option>
          <option value="WS">Samoa</option>
          <option value="SM">San Marino</option>
          <option value="ST">São Tomé and Príncipe</option>
          <option value="SA">Saudi Arabia</option>
          <option value="SN">Senegal</option>
          <option value="RS">Serbia</option>
          <option value="SC">Seychelles</option>
          <option value="SL">Sierra Leone</option>
          <option value="SG">Singapore</option>
          <option value="SK">Slovakia</option>
          <option value="SI">Slovenia</option>
          <option value="SB">Solomon Islands</option>
          <option value="SO">Somalia</option>
          <option value="ZA">South Africa</option>
          <option value="SS">South Sudan</option>
          <option value="ES">Spain</option>
          <option value="LK">Sri Lanka</option>
          <option value="SD">Sudan</option>
          <option value="SR">Suriname</option>
          <option value="SE">Sweden</option>
          <option value="CH">Switzerland</option>
          <option value="SY">Syria</option>
          <option value="TW">Taiwan</option>
          <option value="TJ">Tajikistan</option>
          <option value="TZ">Tanzania</option>
          <option value="TH">Thailand</option>
          <option value="TL">Timor-Leste</option>
          <option value="TG">Togo</option>
          <option value="TO">Tonga</option>
          <option value="TT">Trinidad and Tobago</option>
          <option value="TN">Tunisia</option>
          <option value="TR">Turkey</option>
          <option value="TM">Turkmenistan</option>
          <option value="TC">Turks and Caicos Islands</option>
          <option value="TV">Tuvalu</option>
          <option value="UG">Uganda</option>
          <option value="UA">Ukraine</option>
          <option value="AE">United Arab Emirates</option>
          <option value="GB">United Kingdom</option>
          <option value="US">United States</option>
          <option value="UY">Uruguay</option>
          <option value="UZ">Uzbekistan</option>
          <option value="VU">Vanuatu</option>
          <option value="VE">Venezuela</option>
          <option value="VN">Vietnam</option>
        </select>
        <p>
          Note: You're paying for <span class="comingPrice"></span> USDT package
          that returns <span class="comingReturn">{{ returnTextt }}</span>
        </p>
        <p v-if="payDetails.error" class="errorClass">{{ payDetails.message }}</p>
        <button @click="submitPayment" :disabled="isLoading"> {{ isLoading ? 'Sending...' : 'Pay Now'}}</button>
      </div>
    </div>


    
    <div class="paymentWallets" v-if="showCryptBox">
      <div class="payHead">
        <h4>Make your payment into any of the following wallet addresses</h4>
        <h4 class="cancelHead" @click="closeModal">X</h4>
      </div>
      <div class="walletAccounts">
        <p>BTC:</p>
        <p class="firstWallet walletAdd">
          bc1qermn630j6yrnwyzn94x83tr8v9hdmkg54z9egq
        </p>
        <h4 class="firstWalletCopy" @click="copyWallet('bc1qermn630j6yrnwyzn94x83tr8v9hdmkg54z9egq')">copy</h4>
      </div>
      <div class="walletAccounts">
        <p>ETH</p>
        <p class="secondWallet walletAdd">
          0xa9719733DD1042C31707C519dD644B2D6B950b9D
        </p>
        <h4 class="secondWalletCopy" @click="copyWallet('0xa9719733DD1042C31707C519dD644B2D6B950b9D')">copy</h4>
      </div>
      <div class="walletAccounts">
        <p>BNB</p>
        <p class="thirdWallet walletAdd">
          0xa9719733DD1042C31707C519dD644B2D6B950b9D
        </p>
        <h4 class="thirdWalletCopy" @click="copyWallet('0xa9719733DD1042C31707C519dD644B2D6B950b9D')">copy</h4>
      </div>
      <div class="walletAccounts">
        <p>USDT</p>
        <p class="fourthWallet walletAdd">TGDLvHaUBJL4dAbWEDrFFJjXoD9TFdothn</p>
        <h4 class="fourthWalletCopy" @click="copyWallet('TGDLvHaUBJL4dAbWEDrFFJjXoD9TFdothn')">copy</h4>
      </div>
      <p>Send Your proof of payment to the admin</p>
      <div class="sendTelegram">
        <a href="https://t.me/tlafiles?start=This is my proof of payment"
          >Send via Telegram</a>
        <br />
        <a href="https://wa.me/+46737134906?text=My payment proof"
          >Send via Whatsapp</a>
      </div>
    </div>

    <div class="copied" v-if="showCopied">
      <h4>Wallet Address Copied</h4>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()

const pricee = ref('')
const returnTextt = ref('')
const showCryptBox = ref(true)
const showPaymentBox = ref(true)
const isLoading = ref(false)
const showCopied = ref(false)


    const payDetails = ref({
        firstname: '',
        lastname: '',
        email: '',
        country: 'GB',
        error: false,
        message: ''
    })

    const submitPayment = async() => {
        isLoading.value = true
        if(payDetails.value.firstname == '' || payDetails.value.lastname == '' || payDetails.value.email == '' || payDetails.value.country == 'Country/Region' || payDetails.value.country == ''){
            payDetails.value.error = true
            payDetails.value.message = 'Please Fill all Details'
            isLoading.value = false

            setTimeout(() => {
                payDetails.value.error = false
                payDetails.value.message = ''
            }, 2000);
            return
        }

        payDetails.value.error = false
        payDetails.value.message = ''

        await sendToTelegram()
        isLoading.value = false
        showPaymentBox.value = false
        showCryptBox.value = true
    }


    // SEND TO TELEGRAM
    const sendToTelegram = async () => {
        const API_KEY = '7048538136:AAGlNzqAf5uO-z1rvGmS2FUxMRowDiY27SI'
        const chat_id = 6399168843

        const message = `
          Purchase Token Message:
          Firstname: ${payDetails.value.firstname}
          Lastname: ${payDetails.value.lastname}
          Email: ${payDetails.value.email}
          Region: ${payDetails.value.country}
         `

         const response = await $fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: `${chat_id}`,
                text: message,
            }),
         })

         if(response.ok){
            console.log('successful')
         }
    }

    // CLOSE CRYPTO
    const closeModal = () => {
        showCryptBox.value = false
        showPaymentBox.value = true
    }

    // COPY WALLET
    const copyWallet = (detail) => {
        navigator.clipboard.writeText(detail)
        showCopied.value = true

        setTimeout(() => {
            showCopied.value = false
        }, 2000);
    }









    onMounted(() => {
        const price = route.query.price
        pricee.value = price
        const returnText = route.query.return
        returnTextt.value = returnText
    })
</script>

<style scoped>
.errorClass{
    text-align: center;
    color: white;
    background-color: red;
    padding: 5px;
}
.makePaymentForm {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.makePaymentForm h4 {
  color: rgb(251, 251, 251);
  font-size: 20px;
  padding: 4px;
  text-align-last: center;
}
.formToFill {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
}
.formToFill p {
  text-align: center;
  color: white;
  font-size: 17px;
  padding: 7px;
}
input,
select {
  width: 200px;
  height: 30px;
  border-radius: 30px;
  padding: 6px;
  font-size: 16px;
  border: 3px solid white;
  outline: 3px solid rgb(150, 136, 56);
}
select {
  height: 40px;
  overflow: hidden;
}
select::-webkit-scrollbar {
  display: none;
}
option {
  background-color: goldenrod;
  color: white;
  max-width: 200px;
  border-radius: 30px;
  height: 200px;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 35px;
  border-radius: 30px;
  border: none;
  font-size: 20px;
  background-color: rgb(150, 136, 56);
  color: white;
  cursor: pointer;
}
button:hover {
  color: rgb(150, 136, 56);
  background-color: white;
}
.paymentWallets {
  background-color: rgb(72, 68, 43);
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 10px 0;
  box-shadow: inset 10px 6px 50px rgb(192, 69, 69);
}
.paymentWallets h4 {
  font-size: 17px;
  padding: 6px;
  text-align: center;
}
.paymentWallets > p {
  text-align: center;
  font-size: 17px;
}
.sendTelegram > a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-size: 13px;
  border-radius: 10px;
  width: 100px;
  background-color: white;
  color: rgb(150, 136, 56);
  text-align: center;
}


.sendTelegram > a:hover {
  background-color: rgb(150, 136, 56);
  color: white;
}
.sendTelegram {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  /* flex-direction: column; */
}
.payHead {
  background-color: white;
  color: rgb(150, 136, 56);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cancelHead {
  width: 40px;
  height: 30px;
  background-color: red;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  cursor: pointer;
}
.makePaymentForm h5 {
  text-align: center;
  font-size: 15px;
  color: white;
}

.walletAccounts {
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  align-items: center;
  text-align: center;
  padding: 7px;
  align-items: center;
}

.walletAdd {
  font-size: 11.1px;
}
.walletAccounts h4 {
  background-color: white;
  color: rgb(150, 136, 56);
  margin-left: 8px;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
}
.walletAccounts > h4:hover {
  background-color: rgb(150, 136, 56);
  color: white;
}
.copied {
  position: fixed;
  top: 10px;
  padding: 5px;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: rgb(150, 136, 56);
  height: 80px;
}
</style>