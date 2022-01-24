const number = 123456789;
const number2 = 6516848421554;

function f1(number) {
  const array = [];
  const array2 = [];

  array.push(number);
  for (let i = 0; array[i] >= 10; i += 1) {
    array.push(Math.trunc(array[i] / 10));
  }
  array2.push(array[array.length - 1]);
  for (let i = array.length - 1; i >= 1; i -= 1) {
    array2.push(array[i - 1] - array[i] * 10);
  }
  console.log(array2);
}
f2(number);
//f1(number2);

function f2(number) {
  const array = [];
  let n = number;
  for (let i = 0; n > 0; i += 1) {
    array.push(n % 10);
    n = Math.trunc(n / 10);
  }
  console.log(array.reverse());
}
