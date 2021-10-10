const inquirer = require('inquirer')

const setInput = async (message = '') => {
  const { value } = await inquirer.prompt({
    type: 'input',
    name: 'value',
    message,
    validate(value) {
      if (value.trim().length === 0) return 'Introduce una descripcion'
      return true
    },
  })

  return value
}

module.exports = {
  setInput,
}
