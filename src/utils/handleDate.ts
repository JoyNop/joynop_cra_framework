/**
 *
 * @description 时间格式：2020年1月1日
 * @param {Date} d
 * @returns {string}
 */
export const toDateTime = (d: Date): string => {
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
};

/**
 *
 * @description 时间格式：2020-01-01
 * @param {Date} d
 * @returns {string}
 */
export const toDateTime2 = (d: Date): string => {
  if (d.getMonth() + 1 < 10 && d.getDate() < 10) {
    return `${d.getFullYear()}-0${d.getMonth() + 1}-0${d.getDate()}`;
  }
  if (d.getMonth() + 1 < 10) {
    return `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;
  }
  if (d.getDate() < 10) {
    return `${d.getFullYear()}-${d.getMonth() + 1}-0${d.getDate()}`;
  }
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

/**
 *
 * @description 时间格式：2020-01-01 01:01:01
 * @param {Date} d
 * @returns {string}
 */
export const toDateTime3 = (timestamp: string | number) => {
  // console.log(timestamp);
  // var date = new Date(timestamp*1000);
  var date = new Date(+timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  // console.log(date);
  let Y = date.getFullYear() + ".";
  let M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + ".";
  let D =
    date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " "; // h = date.getHours() + ':';
  let h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":"; // m = date.getMinutes() + ':';
  let m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":"; // s = date.getSeconds();
  let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
};
