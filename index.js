const bcrypt = require('bcryptjs')
const prompt = require('prompt')

let promptSchema = {
  properties: {
    password: {
      name: 'password',
      message: 'Enter a password',
      required: true,
      hidden: true,
      replace: '*',
      type: 'string'
    },
    salt_factor: {
      name: 'salt_factor',
      message: 'Enter the salt factor',
      required: false,
      default: 10,
      type: 'integer'
    }
  }
}

prompt.start();

prompt.get(promptSchema, (err, result) => {
  hashPassword(result.password, result.salt_factor, (err, hash) => {
    if (err) {
      throw err
    }
    console.log(hash)
  })
});


function hashPassword(password, salt_factor, callback) {
  bcrypt.genSalt(salt_factor, (err, salt) => {
    if (err) return callback(err);

    bcrypt.hash(password, salt, (err, hash) => {
        if (err) return callback(err);
        return callback(null, hash)
    })
  })
}