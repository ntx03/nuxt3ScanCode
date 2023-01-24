/**
 * Проверяем ответ от сервера на статус отличный от 200
 * @param {Object} res  - ответ от сервера
 * @returns - возвращаем ответ от сервера в формате JSON или ошибку со статусом в консоль
 */
export const checkErrorJSON = (res: any) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};
/**
 * Проверяем ответ от сервера на статус отличный от 200
 * @param {Object} res  - ответ от сервера
 * @returns - возвращаем ответ от сервера  или ошибку со статусом в консоль
 */
export const checkError = (res: any) => {
  if (res.ok) {
    return res;
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};
const baseUrl: string = "http://10.224.66.36:8081/";
const invUrl: string = "http://10.224.66.36:8080/";
/**
 * авторицазия на сервере инвентори
 */
export const authorization = async (login: string, password: string) => {
  const res = await fetch(baseUrl + "api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      //'access-control-expose-headers' :   'x-auth-token',
      Authorization: `Basic ${btoa(`${login}:${password}`)}`,
    },
  });
  return res;
};
/**
 * Проверяем на наличие инвентарного номера в базе данных
 */
export const changeInvNumber = async (number: string) => {
  const res = await fetch(baseUrl + `api/equipment/get?inventoryNumber=${number}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return checkError(res);
};
/**
 * Список местоположений
 * @returns объект с местоположениями
 */
export const locationList = async () => {
  const res = await fetch(baseUrl + `api/location/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return checkErrorJSON(res);
};
/**
 * Список пользователей инвентори
 * @returns массив с пользователями
 */
export const userList = async () => {
  const res = await fetch(baseUrl + `api/user/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return checkErrorJSON(res);
};
/**
 * Массив с данными состояния оборудования (в резерве, в ремонте)
 * @returns массив с состояниями
 */
export const stateList = async () => {
  const res = await fetch(baseUrl + `api/state/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return checkErrorJSON(res);
};

/**
 * Создание накладной + добавление в нее ТМЦ
 */
export const createDeliveryNote = async (
  senderID: string,
  courier: string,
  locationId: string,
  recipientId: string,
  sourceLocationId: string,
  equipmentsId: string
) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const res = await fetch(baseUrl + `api/consignment/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "x-auth-token": `${token}`,
    },
    body: JSON.stringify({
      // отправитель
      senderId: senderID,
      //курьер
      courier: courier,
      // место куда отправляем
      destinationLocationId: locationId,
      // получатель
      recipientId: recipientId,
      // id места откуда отправляем
      sourceLocationId: sourceLocationId,
      // id оборудования
      equipmentsId: [equipmentsId],
    }),
    //mode: "cors",
  });
  return checkErrorJSON(res);
};
