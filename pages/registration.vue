<template>
    <div>
        <div class="contactForm">
        <h3>Please sign in to your account</h3>
        <div class="formToFill">
            <input type="email" class="contactInput" placeholder="Email" v-model="email">
            <input type="password" class="contactInput" placeholder="Password" v-model="password">
            <p v-if="error">{{ message }}</p>
            <button id="signInUser" class="contactInput" @click="signin">Sign in</button>
        </div>
    </div>
    </div>
</template>

<script setup>
    definePageMeta({
      layout: false
    })
import { useRouter } from 'vue-router'
const router = useRouter()


    const password = ref('')
    const email = ref('')
    const error = ref(false)
    const message = ref('')

    




    const signin = () => {
        const realEmail =  "pureform@gmail.com"
        const realPassword = 'pureform3231'

        if(password.value != realPassword || email.value != realEmail){
            error.value = true
            message.value = 'Credentials do not match'
            setTimeout(() => {
                error.value = false
                message.value = ''
            }, 2000);
            return
        }

        error.value = false
        message.value = ''
        router.push('/dashboard')
    }
</script>

<style scoped>
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
.formToFill{
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
}
#ContactSubmit{
    border: none;
    border-radius: 0 0 0 0;
    background-color: #2aaeda;
}
#ContactSubmit:hover{
    color: #2aaeda;
    background-color: whitesmoke;
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
    padding: 5px;
    border: none;
    outline: none;
    box-shadow: inset 10px 6px 50px rgb(192, 192, 196);
}
</style>