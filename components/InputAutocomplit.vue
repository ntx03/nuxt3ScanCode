<template>
  <div class="statistics__find-box-select-container">
    <label class="invoice__input-label">{{ label }}</label>
    <div class="input__box">
      <input type="text" class="statistics__find-box-select" v-model="idInput" @click="goWatch" @touchstart.prevent="goWatch" placeholder="Нажмите, чтобы выбрать" />
      <img src="../assets/arrowDown.svg" class="icon" />
    </div>
    <div class="statistics__find-box-autocomplete" :class="{ 'statistics__find-box-autocomplete_none': !openList }">
      <p :key="item" v-for="item in choseID" class="statistics__find-box-autocomplete__title" @click="changeID">
        {{ item }}
      </p>
    </div>
    <!-- <input autocomplete="off" list="datalistOptions" v-model="idInput" id="exampleDataList" />
        <datalist id="datalistOptions">
            <option :key="item" v-for="item in getUsers">{{ item }}</option>
        </datalist> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
});

const getUsers: string[] = ["Вася Мишин", "Петя Куренков", "Анна Медведева", "Олег Прокопенко", "Михаил Созонов", "Петр Мишин", "Андрей Качур", "Никита Михайлов", "Владимир Мутин"];
let choseID: string[] = [];
const idInput = ref("");
const openList = ref(false);

const closeList = (): void => {
  openList.value = false;
};
const changeID = (e: { target: any }) => {
  idInput.value = e.target.textContent;
  openList.value = false;
};
const goWatch = (): void => {
  openList.value = !openList.value;
  choseID = getUsers;
  //choseID = getUsers;
  watch(idInput, () => {
    //openList.value = true;
    // choseID = getUsers;
    let errorID = new Set();
    for (let i = 0; i < getUsers.length; i++) {
      const id = getUsers[i].split(" ");
      if (id.join("").toLowerCase().includes(idInput.value.toLowerCase()) == true) {
        errorID.add(getUsers[i]);
      }
      let result: string[] = [];
      errorID.forEach((i) => {
        result.push(i);
      });
      choseID = result;
      // if (String(idInput.value).length > 0 && String(choseID).length < 1) {
      //     this.isShowMessage = false;
      // } else this.isShowMessage = true;

      // if (idInput.value == this.error) {
      //     this.isShowMessage = true;
      // }
      // if (String(choseID).split(",").length < 2) {
      //     openList.value = false;
      // }
    }
  });
};
</script>

<style scoped lang="scss">
.input__box {
  width: 90%;
  height: 30px;
  margin: 0 auto 0 auto;
  display: flex;
  outline: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  &:hover {
    outline: 2px solid $buttonGreen;
  }
}
.statistics__find-box-select-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 98%;
  margin: 0 0 0 0;
  gap: 2px;
}

.statistics__find-box-select {
  border: none;
  width: 80%;
  height: 25px;
  outline: none;
  padding: 3px 0 0 10px;
  font-size: 12px;
}
.icon {
  width: 15px;
  height: 15px;
  margin: auto 3% auto auto;
}
.statistics__find-box-autocomplete {
  position: absolute;
  background-color: rgb(211, 250, 243);
  width: 85%;
  max-height: 100px;
  overflow: auto;
  top: 58px;
  box-shadow: 0px 0px 5px gray;
  left: 7%;
  font-size: 12px;
  z-index: 1;
  &_none {
    display: none;
  }
  &__title {
    padding: 0;
    margin: 0px 0 2px 5px;
    padding: 2px 0 2px 5px;
  }
}
.statistics__find-box-autocomplete__title {
  width: 97%;
  height: max-content;
  &:hover {
    cursor: pointer;
    background-color: rgba(82, 186, 168, 0.2);
  }
}
.invoice__input-label {
  font-size: 12px;
  color: $buttonGreen;
  margin: 0 auto 0 5%;
}
</style>
