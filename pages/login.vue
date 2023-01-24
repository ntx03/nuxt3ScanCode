<script setup lang="ts">
const auth = useAuth();
const user = useUserData();
const allUsers = useAllUsers();
const allLocation = useAllLocations();
const allState = useAllState();

const login = ref("");
const password = ref("");
const disabledButton = ref(true);
const errorLogin = reactive({ state: true });
const errorServer = ref(true);

/**
 * Проходим авторизацию
 */
const getAuth = () => {
  authorization(login.value, password.value)
    .then((response) => {
      if (response.ok) {
        console.log(response.headers.get("x-auth-token"));
        localStorage.setItem("token", response.headers.get("x-auth-token"));
        return response.json();
      } else if (response.status == 401) {
        errorLogin.state = false;
      } else if (response.status == 500) {
        errorServer.value = false;
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    })
    .then((res) => {
      user.value = res;
      //  console.log(res);
      auth.value = true;
      stateList()
        .then((res) => {
          //  console.log(res);
          allState.value = res;
        })
        .catch((err) => {
          alert(err);
        });
      userList()
        .then((res) => {
          //   console.log(res);
          allUsers.value = res;
        })
        .catch((err) => {
          alert(err);
        });
      locationList()
        .then((res) => {
          //   console.log(res);
          allLocation.value = res;
        })
        .catch((err) => {
          alert(err);
        });
      navigateTo("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

watchEffect(() => {
  if (password.value || login.value) {
    errorLogin.value = true;
    errorServer.value = true;
  }
  if (password.value.length > 1 && login.value.length > 1) {
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
    <div class="login__error-box">
      <p class="login__error-server" :class="{ 'login__error-server_none': errorServer }">Ошибка сервера</p>
      <p class="login__error-login" :class="{ 'login__error-login_none': errorLogin }">Неправильный логин или пароль</p>
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
  color: #02b293;
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
.login__icon-input {
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
.login__error-box {
  width: 200px;
  height: 20px;
  margin: -8px auto 10px auto;
}
.login__error-login {
  padding: 0;
  margin: 0;
  font-size: 10px;
  text-align: center;
  color: red;
  &_none {
    display: none;
  }
}
.login__error-server {
  padding: 0;
  margin: 0;
  font-size: 10px;
  text-align: center;
  color: red;
  &_none {
    display: none;
  }
}
.login__button_disabled {
  background-color: $buttonGreen;
  opacity: 0.5;
}
</style>
