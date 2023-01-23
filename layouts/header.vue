<script setup lang="ts">
const navigation = useNavigation();
/**
 * данные о пользователе
 */
const userData = useUserData();
const userName = userData.value.details.name;
function openNavigate() {
  navigation.value = true;
}

const clearStorage = () => {
  //localStorage.removeItem("user");
};
</script>

<template>
  <div>
    <div class="header">
      <img class="header__logo" src="../assets/logo_2.svg" />
      <p class="header__text">Mob inventory</p>
      <div class="header__exit-container">
        <p class="exit__text">{{ getName(userName) }}</p>
        <NuxtLink to="/login" @click.prevent="clearStorage"> <img class="exit__icon" src="../assets/exit.svg" /></NuxtLink>
      </div>
      <!-- <img class="header__burger" src="../assets/burger-menu.svg" @click="openNavigate" /> -->
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  background-color: inherit;
  margin: 0 auto 0 auto;
  text-align: center;
  height: 100px;
  max-width: 500px;
}

.header__text {
  font-size: 18px;
  font-weight: 400;
  max-width: 300px;
  color: $buttonGreen;
  width: max-content;
  margin: 40px 0 0 10px;
}

.header__logo {
  width: 30px;
  height: 40px;
  margin: auto 0 auto 5%;
}

.header__burger {
  width: 40px;
  height: 40px;
  margin: auto 20px auto auto;
  transition: 0.5s;
  &:hover {
    //rotate: 180deg;
    transform: scale(1.3);
    cursor: pointer;
  }
}
.header__exit-container {
  display: flex;
  margin: auto 20px auto auto;
  gap: 10px;
  padding: 4px 0 0 0;
  width: max-content;
  height: max-content;
}
.exit__text {
  font-size: 12px;
  margin: auto;
  padding: 0;
  width: max-content;
  font-weight: 400;
  color: gray;
}
.exit__icon {
  width: 20px;
  height: 20px;
  padding: 4px 0 0 0;
  margin: auto;
}
</style>
