const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, callback);
};

module.exports = {
  comparePasswords,
  hashPassword,
};