function getNumber(delay) {
  return new Promise((resolve, reject) => {
    number = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      if (number % 5 === 0) {
        resolve(`Promise Accepted for: ` + number);
      }
      reject(`Promise Rejected for: ` + number);
    }, delay);
  });
}

console.log(getNumber(1).then(console.log).catch(console.log));
