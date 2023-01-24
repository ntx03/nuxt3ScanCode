<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const state = useAllState();
const locationState = useAllLocations();
const users = useAllUsers();
const equipment = useEquipment();
const numberDeliveryNote = useNumberDeliveryNote();

const mol = ref("");
const local = ref("");
const statusEquipment = ref("");
const courier = ref("");

statusEquipment.value = equipment.value.state.name;
const usersArr = JSON.parse(JSON.stringify(users.value));
const locationStateArr = JSON.parse(JSON.stringify(locationState.value));
const stateArr = JSON.parse(JSON.stringify(state.value));
let sortLocations: string[] = [];

/**
 * Очистка формы
 */
const clearInput = () => {
  mol.value = "";
  local.value = "";
  statusEquipment.value = "";
};
const disableSearch = () => {
  if (mol.value.length < 1 || local.value.length < 1 || statusEquipment.value < 1 || courier.value < 1) {
    return true;
  } else false;
};
const createDelivery = () => {
  let senderId: string = equipment.value.accountablePerson.id;
  let courierName: string = courier.value;
  let destinationLocationId: string;
  let recipientId: string;
  let sourceLocationId: string = equipment.value.location.id;
  let equipmentId: string = equipment.value.id;
  // console.log(equipment.value);
  usersArr.forEach((i: any) => {
    if (mol.value === i.name) {
      recipientId = i.id;
      i.locations.forEach((locate: string) => {
        if (locate.name == local.value) {
          destinationLocationId = locate.id;
        }
      });
    }
  });

  createDeliveryNote(senderId, courierName, destinationLocationId, recipientId, sourceLocationId, equipmentId)
    .then((res: any) => {
      console.log(res.consignment);
      numberDeliveryNote.value = res[0].consignment.number;
      console.log(res);
      navigateTo("/successful");
    })
    .catch((err: any) => {
      alert(err);
    });
};
watch(mol, function () {
  let arr: string[] = [];
  usersArr.forEach((i: object) => {
    if (mol.value == i.name) {
      i.locations.forEach((locate: string) => {
        arr.push(locate);
      });
    }
  });
  sortLocations = arr;
});
</script>

<template>
  <HeaderGoBack :link="'/deliverynote'" />
  <!-- <h1 class="main__title">Накладная <span class="main__title_black">0000111:</span></h1> -->
  <h3 class="title">Сведения об получателе:</h3>
  <div class="container">
    <div class="select__box">
      <label class="invoice__input-label">МОЛ получатель:</label>
      <input
        autocomplete="off"
        inputmode="text"
        class="input__datalist"
        placeholder="Введите Ф.И.О."
        list="datalistOptions"
        v-model="mol"
        id="exampleDataList"
      />
      <datalist id="datalistOptions">
        <option :key="item.id" v-for="item in usersArr">{{ item.name }}</option>
      </datalist>
      <!-- <InputAutocomplit :label="'МОЛ получатель:'" :data="users" /> -->
    </div>

    <div class="select__box">
      <label class="invoice__input-label">Новое местоположение:</label>
      <input
        autocomplete="off"
        inputmode="text"
        class="input__datalist"
        placeholder="Введите местоположение"
        list="datalistLocation"
        v-model="local"
        id="exampleDataList"
      />
      <datalist id="datalistLocation">
        <option :key="item.id" v-for="item in sortLocations">{{ item.name }}</option>
      </datalist>
      <!-- <InputAutocomplit :label="'Новое местоположение:'" :data="locationState" /> -->
    </div>

    <div class="select__box">
      <label class="invoice__input-label">Статус оборудования:</label>
      <input
        autocomplete="off"
        inputmode="text"
        class="input__datalist"
        placeholder="Выбирите статус оборудования"
        list="datalistState"
        v-model="statusEquipment"
        id="exampleDataList"
      />
      <datalist id="datalistState">
        <option :key="item.id" v-for="item in stateArr">{{ item.name }}</option>
      </datalist>
      <!-- <InputAutocomplit :label="'Состояние:'" :data="state" /> -->
    </div>

    <div class="input__box">
      <p class="input__title">Курьер:</p>
      <input type="text" class="input" inputmode="text" v-model="courier" placeholder="Введите Ф.И.О или -" />
    </div>
  </div>
  <div class="invoice__button-container">
    <button class="invoice__button cancel" @click="clearInput">Очистить</button>

    <button class="invoice__button ok" :class="{ ok_disabled: disableSearch() }" :disabled="disableSearch()" @click="createDelivery">
      Отправить
    </button>
  </div>
  <button
    class="invoice__button cancel"
    @click="
      () => {
        navigateTo(`/successful`);
      }
    "
  >
    На страницу successful
  </button>
  <button
    class="invoice__button cancel"
    @click="
      () => {
        navigateTo(`/error`);
      }
    "
  >
    На страницу error
  </button>
</template>

<style scoped lang="scss">
.input__datalist {
  display: flex;
  margin: 5px auto 0 auto;
  width: 90%;
  height: 30px;
  border-radius: 10px;
  outline: 1px solid rgba(0, 0, 0, 0.6);
  border: none;
  padding: 0 0 0 10px;
  font-size: 12px;
  &:hover {
    outline: 2px solid $buttonGreen;
  }
}

.invoice__input-label {
  font-size: 12px;
  color: $buttonGreen;
  margin: 0 auto 0 5%;
}
.container {
  display: flex;
  flex-direction: column;
  width: 90vw;
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
  width: 99%;
  margin: 0px auto 10px auto;
}
.input__box {
  display: flex;
  flex-direction: column;
  width: 92%;
  margin: 0px auto 0px auto;
}
.input__title {
  margin: 0 0 2px 6px;
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
  background-color: $black;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}

.ok {
  background-color: $buttonGreen;
  &_disabled {
    opacity: 0.5;
  }
}

@media (min-width: 500px) {
  .select__box {
    width: 400px;
  }
  .input__box {
    width: 370px;
    margin: 0 auto 0 auto;
    padding: 0 0 0 2px;
  }
}
</style>
