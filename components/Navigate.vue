<template>
  <div class="navigation__container">
    <NuxtLink to="/" class="navigation__item"
      ><div class="icon__container">
        <img src="../assets/qr_code_scanner.svg" class="navigation__icon" />
        <p class="icon__text icon__text_green">Сканировать</p>
      </div></NuxtLink
    >
    <NuxtLink to="/" class="navigation__item"
      ><div class="icon__container">
        <img src="../assets/manage_search.svg" class="navigation__icon" />
        <p class="icon__text">История</p>
      </div>
    </NuxtLink>
    <NuxtLink to="/" class="navigation__item"
      ><div class="icon__container">
        <img src="../assets/account_circle.svg" class="navigation__icon" />
        <p class="icon__text">Профиль</p>
      </div></NuxtLink
    >
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.navigation__container {
  display: flex;
  gap: 10px;
  margin: 30px auto 30px auto;
  width: 80%;
  justify-content: space-between;
}
.navigation__item {
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
}
.navigation__icon {
  width: 30px;
  height: 30px;
  margin: auto;
}
.icon__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon__text {
  padding: 0;
  margin: 6px 0 0 0;
  text-decoration: none;
  text-align: center;
  text-decoration: none;
  color: $grey;
  &_green {
    color: $buttonGreen;
  }
}
@media (min-width: 500px) {
  .navigation__container {
    width: 95%;
  }
}
</style>
