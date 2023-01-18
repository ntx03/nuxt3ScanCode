/**
 * Сокрашение полного фио до формата Иванов И.И.
 * @param fullName - полное имя пользователя на кирилице
 * @returns Фио с сокращенным именем и отчеством
 */
export const getName = (fullName: string) => {
    const nameArr = fullName.split(" ");
    let arr = [];
    for (let i = 0; i < nameArr.length; i++) {
      if (i === 0) {
        arr.push(`${nameArr[i]} `);
      } else {
        arr.push(`${nameArr[i].slice(0, 1)}.`);
      }
    }
    return arr.join("");
  };