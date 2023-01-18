<template>
  <HeaderGoBack :link="'/deliverynote'" />
  <!-- <h1 class="main__title">Накладная <span class="main__title_black">0000111:</span></h1> -->
  <h3 class="title">Сведения об получателе:</h3>
  <div class="container">
    <div class="select__box">
      <InputAutocomplit :label="'МОЛ получатель:'" />
    </div>

    <div class="select__box">
      <InputAutocomplit :label="'Новое местоположение:'" />
    </div>

    <div class="select__box">
      <InputAutocomplit :label="'Состояние:'" />
    </div>

    <div class="input__box">
      <p class="input__title">Курьер:</p>
      <input type="text" class="input" placeholder="Ф.И.О" />
    </div>
  </div>
  <div class="invoice__button-container">
    <button class="invoice__button cancel">Очистить</button>
    <button class="invoice__button ok">Отправить</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  // border: 1px red solid;
  width: 100%;
  margin: 0 auto 0 auto;
}
.title {
  font-size: 14px;
  margin: 25px auto 10px auto;
  font-weight: 400;
  line-height: 16px;
  color: $buttonGreen;
}
.main__title {
  margin: 20px 20px 0px 20px;
  padding: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: $buttonGreen;
  &_black {
    color: black;
  }
}
.select__box {
  width: 80%;
  margin: 0px auto 10px auto;
}
.input__box {
  display: flex;
  flex-direction: column;
  width: 70.7%;
  margin: 0px auto 0px 14%;
}
.input__title {
  margin: 0 0 2px 0;
  padding: 0;
  font-size: 12px;
  color: $buttonGreen;
}
.input {
  display: flex;
  outline: 1px solid rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 30px;
  border: none;
  margin: 0 auto 0 auto;
  padding: 0 0 0px 9px;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 12px;
  &:hover {
    outline: 2px solid $buttonGreen;
  }
}
.invoice__button-container {
  display: flex;
  gap: 20px;
  margin: 40px auto 0 auto;
}
.invoice__button {
  font-size: 12px;
  height: 30px;
  border-radius: 10px;
  width: 120px;
  border: none;
  color: white;
  background-color: rgba(0, 0, 0, 0.79);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}

.ok {
  background-color: $buttonGreen;
}
@media (min-width: 500px) {
  .select__box {
    width: 500px;
  }
  .input__box {
    width: 440px;
    margin: 0 auto 0 auto;
  }
}
</style>
