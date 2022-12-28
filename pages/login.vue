<script setup>
const auth = useAuth();
const login = ref("");
const password = ref("");
const disabledButton = ref(true);
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const getAuth = () => {
    auth.value = true;
    console.log(login.value);
    console.log(password.value);
    navigateTo("/");
};
watchEffect(() => {
    if (login.value.match(re) && password.value.length > 5) {
        disabledButton.value = false;
    } else disabledButton.value = true;
});
</script>

<template>
    <div class="login__container">
        <h1 class="login__title">Вход</h1>
        <input type="text" class="login__name" v-model="login" placeholder="Логин пользователя" />
        <input type="password" class="login__password" v-model="password" placeholder="Пароль" />
        <button class="login__button" :class="{ login__button_disabled: disabledButton }" @click="getAuth" :disabled="disabledButton">Войти</button>
    </div>
</template>

<style lang="scss">
.login__container {
    display: flex;
    flex-direction: column;
    margin: 20vh auto 0 auto;
}
.login__title {
    margin: 0 auto 20px auto;
}
.login__name {
    margin: 0 auto 20px 0;
    width: 200px;
}
.login__password {
    margin: 0 auto 20px 0;
    width: 200px;
}
.login__button {
    padding: auto;
    background-color: $blue;
    color: white;
    padding: 10px;
    margin: 0 auto 20px auto;
    border: none;
    border-radius: 10px;
    transition: 0.3s;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
}
.login__button_disabled {
    background-color: $blue;
    opacity: 0.5;
}
</style>
