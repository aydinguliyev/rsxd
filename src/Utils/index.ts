const day =
  new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();
const month =
  new Date().getMonth() + 1 < 10
    ? `0${new Date().getMonth() + 1}`
    : new Date().getMonth() + 1;
const year = (new Date().getFullYear() + "").slice(-2);

const time = `${day}.${month}.${year}`;
export const expenceTime = String(time);
