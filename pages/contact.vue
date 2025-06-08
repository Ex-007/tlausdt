<template>
    <div>
            <div class="contactForm">
        <h3>Need help? Contact us today</h3>
        <div class="formToFill">
            <input type="text" class="contactInput" placeholder="Your Firstname" v-model="contactDetails.firstname">
            <input type="text" class="contactInput" placeholder="Your Lastname" v-model="contactDetails.lastname">
            <input type="email" class="contactInput" placeholder="Your Email" v-model="contactDetails.email">
            <input type="text" class="contactInput" placeholder="Subject" v-model="contactDetails.textContent">
            <textarea placeholder="Enter Message here"></textarea>

            <p v-if="contactDetails.error" class="errorClass">{{ contactDetails.message }}</p>
            <button class="ContactSubmit" @click="sendMessage" :disabled="isLoading">{{ isLoading ? 'Sending...' : 'Send' }}  Submit</button>
        </div>
    </div>


    <div class="copied" v-if="showSent">
        <h4>Message sent</h4>
    </div>
    </div>
</template>

<script setup>
    const isLoading = ref(false)
    const showSent = ref(false)

    const contactDetails = ref({
        firstname: '',
        lastname: '',
        email: '',
        textContent: '',
        subject: '',
                error: false,
        message: ''
    })

    // Send message
    const sendMessage = async () => {
        isLoading.value = true

                if(contactDetails.value.firstname == '' || contactDetails.value.lastname == '' || contactDetails.value.email == '' || contactDetails.value.textContent == '' || contactDetails.value.subject == ''){
            contactDetails.value.error = true
            contactDetails.value.message = 'Please Fill all Details'
            isLoading.value = false

            setTimeout(() => {
                contactDetails.value.error = false
                contactDetails.value.message = ''
            }, 2000);
            return
        }

        await sentToTelegram()

    }


    // SEND TO TELEGRAM
const sentToTelegram = async () => {
    const API_KEY = '7048538136:AAGlNzqAf5uO-z1rvGmS2FUxMRowDiY27SI'
    const chat_id = 6399168843

    const message = `
          Help Message:
          Firstname: ${contactDetails.value.firstname}
          Lastname: ${contactDetails.value.lastname}
          Email: ${contactDetails.value.email}
          Subject: ${contactDetails.value.subject}
          Message: ${contactDetails.value.textContent}
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
        showSent.value = true

                    setTimeout(() => {
               showSent.value = false
            }, 2000);
    }
}





</script>

<style scoped>
.errorClass{
    text-align: center;
    color: white;
    background-color: red;
    padding: 5px;
}
.ContactSubmit{
    border: none;
    border-radius: 0 0 0 0;
    background-color: rgb(193, 108, 16);
}
.ContactSubmit:hover{
    color: rgb(193, 108, 16);
    background-color: whitesmoke;
}
textarea{
    height: 100px;
    width: 300px;
    padding: 8px;
    box-shadow: inset 10px 6px 50px rgb(193, 108, 16);
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
    background-color: #5a5c41;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: inset 10px 6px 50px rgb(193, 108, 16);
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
    outline: none;
    box-shadow: inset 10px 6px 50px rgb(192, 192, 196);
}
.overallIn{
    display: flex;
    padding: 5px;
    justify-content: space-between;
}

.contactForm>p{
    text-align: center;
    font-size: 17px;
    color: #cbda2a;
}
.formToFill{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
}
.formToFill p{
    text-align: center;
    color: white;
    font-size: 17px;
    padding: 7px;
}
input, select{
    width: 200px;
    height: 30px;
    border-radius: 30px;
    padding: 6px;
    font-size: 16px;
    border: 3px solid white;
    outline: 3px solid rgb(150, 136, 56);
}
select{
    height: 40px;
    overflow: hidden;
}
select::-webkit-scrollbar{
    display: none;
}
option{
    background-color: goldenrod;
    color: white;
    max-width: 200px;
    border-radius: 30px;
    height: 200px;
}
button{
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
button:hover{
    color: rgb(150, 136, 56);
    background-color: white;
}
</style>