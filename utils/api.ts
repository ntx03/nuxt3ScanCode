/**
 * Проверяем ответ от сервера на статус отличный от 200
 * @param {Object} res  - ответ от сервера
 * @returns - возвращаем ответ от сервера в формате JSON или ошибку со статусом в консоль
 */
export const checkErrorJSON = (res:any) => {
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
export const checkError = (res:any) => {
    if (res.ok) {
        return res;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};
const baseUrl: string =  'http://10.224.66.36:8081/';
const invUrl: string = 'http://10.224.66.36:8080/';
/**
 * авторицазия на сервере инвентори
 */
export const authorization = async (login: string, password: string) => {
    const res = await fetch(baseUrl + "api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Basic ${btoa(`${login}:${password}`)}`,
        },
    });
    return checkError(res);
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
export const locationList = async() => {
    const res = await fetch(baseUrl  + `api/location/list`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    return checkErrorJSON(res);
}
/**
 * Список пользователей инвентори
 * @returns массив с пользователями
 */
export const userList = async() => {
    const res = await fetch(baseUrl  + `api/user/list`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    return checkErrorJSON(res);
}
/**
 * Массив с данными состояния оборудования (в резерве, в ремонте)
 * @returns массив с состояниями 
 */
export const stateList = async() => {
    const res = await fetch(baseUrl  + `api/state/list`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    return checkErrorJSON(res);
}

