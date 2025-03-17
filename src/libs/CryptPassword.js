const bcrypt = require("bcrypt");
const { performance } = require("perf_hooks");
const passwords = [
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
  "ffafddsfdsf",
];
saltRounds = 5;
const hashPasswords = (passwords, saltRounds) => {
  const startTime = performance.now();

  const hashedPasswords = passwords.map((password) => {
    const hash = bcrypt.hashSync(password, saltRounds);
    const endTime = performance.now();
    const TimeForPassword = endTime - startTime;
    return { hash, TimeForPassword };
  });

  return {
    hashedPasswords,
  };
};
module.exports = { hashPasswords };
console.log(
  hashPasswords(passwords, saltRounds),
  "Вывод время будет меняться в зависимости от заданного 'солевого значения'"
);
