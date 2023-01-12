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
/**
 * запрос  на добавление комментария к ошибке

 */
export const authorization = async (login: string, password: string) => {
    const res = await fetch(baseUrl + "api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Basic ${btoa(`${login}:${password}`)}`,
        },
    });
    return checkErrorJSON(res);
};