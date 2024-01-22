function* fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  const fibGen = fibonacci(10);
  console.log(fibGen.next().value); // Виведе 0
  console.log(fibGen.next().value); // Виведе 1
  console.log(fibGen.next().value); // Виведе 1
  console.log(fibGen.next().value); // Виведе 2
  console.log(fibGen.next().value); // Виведе 3
 
  
//   flatten

  function* flatten(arr) {
    for (const element of arr) {
      if (Array.isArray(element)) {
        yield* flatten(element);
      } else {
        yield element;
      }
    }
  }
  const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
  const flattenGen = flatten(nestedArr);
  console.log([...flattenGen]);
  // Виведе [1, 2, 3, 4, 5, 6, 7]
  


  
//   asyncGenerator
  async function* asyncGenerator(promises) {
    for (const promise of promises) {
      try {
        const result = await promise;
        yield result;
      } catch (error) {
        yield Promise.reject(error);
      }
    }
  }
  const promises = [
    new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 500)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Failed')), 800)),
  ];
  (async () => {
const generator = asyncGenerator(promises);
for await (const result of generator) {
   console.log(result);
   }
  })();
  