<script setup>
import { authorization } from '../utils/api';
const auth = useAuth();
const login = ref("");
const password = ref("");
const disabledButton = ref(true);
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const getAuth = () => {
  //  authorization(login.value, password.value)
    //    .then((res)=>{
            //    console.log(res)
                auth.value = true;
                navigateTo("/");
        //    })
};

watchEffect(() => {
    if (password.value.length > 5) {
        disabledButton.value = false;
    } else disabledButton.value = true;
});
</script>

<template>
    <div class="login__container">
        <img class="header__logo" src="../assets/logo_2.svg" />
        <h1 class="login__title">Mob Inventory</h1>
        <div class="login__input-container">
            <img class="login__icon-input" src="../assets/input.svg" />
            <input type="text" class="login__input" v-model="login" placeholder="Введите логин" />
        </div>
        <div class="login__input-container">
            <img class="login__icon-input" src="../assets/lock.svg" />
            <input type="password" class="login__input" v-model="password" placeholder="Введите пароль" />
        </div>
        <button class="login__button" :class="{ login__button_disabled: disabledButton }" @click="getAuth" :disabled="disabledButton">Войти</button>
    </div>
</template>

<style lang="scss">
.header__logo {
    width: 40px;
    height: 50px;
    margin: auto;
}
.login__container {
    display: flex;
    flex-direction: column;
    margin: 20vh auto 0 auto;
}
.login__title {
    margin: 20px auto 20px auto;
    color: #02B293;
    font-size: 20px;
    font-weight: 300;
    line-height: 26px;

}
.login__input-container {
    width: 200px;
    height: 35px;
    display: flex;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.67);
    gap: 5px;
    margin: 0 0 15px 0;
}
.login__input {
    margin: 0 auto 20px 0;
  width: 80%;
  border: none;
  height: 90%;
  border-radius: 10px;
  outline: none;
   
}
.login__icon-input{
width: 20px;
height: 18px;
padding: 0 0 2px 0;
margin: auto 0 auto 10px;
}
.login__password {
    margin: 0 auto 20px 0;
    width: 200px;
}
.login__button {
    padding: auto;
    background-color: $buttonGreen;
    color: white;
    padding: 10px;
    margin: 0 auto 20px auto;
    border: none;
    border-radius: 10px;
    transition: 0.3s;
    width: 170px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
}
.login__button_disabled {
    background-color: $buttonGreen;
    opacity: 0.5;
}
</style>
