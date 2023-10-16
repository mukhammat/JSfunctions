// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
console.log( formatDate(new Date(2014, 2, 1, 11, 22, 33)) );


function formatDate(date) {
  const now = new Date();
  const result = now - date;
  const [day, month, year] = date.toLocaleDateString('ru-Ru').toString().split('.');
  const [hour, minute] = date.toLocaleTimeString('ru-Ru').toString().split(':');

  if(result < 1000) {
    return 'прямо сейчас';
  }
  if(result < (60 * 1000)) {
    return `${result / 1000} сек. назад`;
  }
  if(result < ((60 * 1000) * 60)) {
    return `${(result /1000)/60} мин. назад`;
  } 
  
  return `${day}.${month}.${year.slice(2)} ${hour}:${minute}`;
}
