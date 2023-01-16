<script setup lang="ts">
//import { changeInvNumber } from "../utils/api";
const invNumber = ref("");
const cerNumber = ref("");
const equipment = useEquipment();
const goInfirmation = () => {
  changeInvNumber(invNumber.value)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      equipment.value = res;
      console.log(`Ответ от сервера: ${res}`);
      console.log(res);
      navigateTo("/information");
    });
};
</script>
<template>
  <HeaderGoBack :link="'/'" />
  <h1 class="main__title">Укажите инвентарный или серийный номер оборудования:</h1>
  <div class="input__box">
    <p class="input__title">Инвентарный номер:</p>
    <div class="login__input-container">
      <img class="login__icon-input" src="../assets/note.svg" />
      <input type="text" class="login__input" v-model="invNumber" placeholder="Введите инвентарный номер" />
    </div>
  </div>
  <div class="input__box">
    <p class="input__title">Серийный номер:</p>
    <div class="login__input-container">
      <img class="login__icon-input" src="../assets/note.svg" />
      <input type="text" class="login__input" v-model="cerNumber" placeholder="Введите серийный номер" disabled />
    </div>
  </div>
  <div class="button__box">
    <button class="button button__clear">Очистить</button>
    <button class="button button__search" @click="goInfirmation">Поиск</button>
  </div>
  <Navigate />
</template>
<style scoped lang="scss">
.header {
  display: flex;
  width: 90%;
  margin: 10px auto 10px auto;
}
.back__container {
  display: flex;
  margin: 0;
  gap: 10px;
}
.back__icon {
  width: 15px;
  height: 15px;
  margin: auto;
}
.back__text {
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: black;
  padding: 4px 0 0 0;
  &:hover {
    cursor: pointer;
  }
}
.exit__text {
  font-size: 14px;
  margin: auto;
  padding: 0;
  width: max-content;
  font-weight: 400;
}
.exit__icon {
  width: 20px;
  height: 20px;
  padding: 3px 0 0 0;
  margin: auto;
}
.header__exit-container {
  display: flex;
  margin: auto 10px auto auto;
  gap: 10px;
  padding: 0;
  width: max-content;
  height: max-content;
}
.main__title {
  margin: 30px 20px 20px 20px;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: $buttonGreen;
}
.input__box {
  margin: 0px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.input__title {
  padding: 0;
  margin: 0 0 0 20px;
  font-size: 14px;
  color: $buttonGreen;
}
.login__input-container {
  width: 90%;
  height: 35px;
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.67);
  gap: 5px;
  margin: 0 auto 15px auto;
}
.login__input {
  margin: 0 auto 20px 0;
  width: 220px;
  border: none;
  height: 90%;
  border-radius: 10px;
  outline: none;
  font-size: 12px;
}

.login__icon-input {
  width: 20px;
  height: 18px;
  padding: 0 0 2px 0;
  margin: auto 0 auto 10px;
}
.button__box {
  display: flex;
  gap: 20px;
  margin: 20px auto 20px auto;
  width: max-content;
}
.button {
  border: none;
  color: white;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  width: 120px;
  border-radius: 10px;
  height: 32px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.06);
  }
}
.button__clear {
  background-color: rgba(0, 0, 0, 0.79);
  padding: 0 0 2px 0px;
}
.button__search {
  background-color: $buttonGreen;
  padding: 0 0 2px 0px;
}
</style>
