<script setup lang="ts">
defineProps<{
  link: string;
}>();

/**
 * данные о пользователе
 */
const dataUser = useUserData();
const userName = dataUser.value.details.name;

const logout = () => {
  localStorage.removeItem("token");
};
</script>

<template>
  <div class="header">
    <div class="back__container">
      <img class="back__icon" src="../assets/left_row.svg" />
      <NuxtLink :to="link" class="back__text">Назад</NuxtLink>
    </div>
    <div class="header__exit-container">
      <p class="exit__text">{{ getName(userName) }}</p>
      <NuxtLink to="/login" @click="logout"><img class="exit__icon" src="../assets/exit.svg" /></NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  width: 90%;
  margin: 20px auto 10px auto;
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
  color: gray;
  padding: 6px 0 0 0;
  &:hover {
    cursor: pointer;
  }
}
.header__exit-container {
  display: flex;
  margin: 2px 10px auto auto;
  gap: 10px;
  padding: 0;
  width: max-content;
  height: max-content;
}
.exit__icon {
  width: 20px;
  height: 20px;
  padding: 5px 0 0 0;
  margin: auto;
}
.exit__text {
  font-size: 14px;
  margin: auto;
  padding: 0;
  width: max-content;
  font-weight: 400;
  color: gray;
}

@media (min-width: 500px) {
  .header {
    width: 400px;
  }
}
</style>
