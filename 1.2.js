console.log('Start');

const promise1 = new Promise((resolve, reject) => {
  console.log('Promise 1 pending');
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  console.log('Promise 2 pending');
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 1500);
});

promise1
  .then((result) => {
    console.log(result);
    return promise2;
  })
  .then((result2) => {
    console.log(result2);
    console.log('End');
  })
  .catch((error) => {
    console.error(error);
  });

console.log('After Promises registered');
