<script setup lang="ts"></script>
<template>
  <HeaderGoBack :link="'/recipient'" />
  <div class="error">
    <h2 class="error__title">При создании накладной возникла ошибка.</h2>
    <h2 class="error__title">Попробуйте еще раз!</h2>
    <NuxtLink class="error__link" to="/recipient">Назад</NuxtLink>
  </div>

  <Navigate />
</template>

<style lang="scss" scoped>
.error {
  margin: 80px auto 0 auto;
}
.error__title {
  width: 250px;
  margin: 0px auto 10px auto;
  text-align: center;
  padding: 0 20px 0 20px;
  color: $buttonGreen;
  font-size: 16px;
  line-height: 25px;
}

.error__link {
  display: block;
  margin: 40px auto 40px auto;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  color: white;
  background-color: $blue;
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  padding: 6.5px 0 5px 30px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>
