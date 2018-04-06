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
    }
  }
}

prompt.start();

prompt.get(promptSchema, function (err, result) {
  console.log('  password: ' + result.password);
});