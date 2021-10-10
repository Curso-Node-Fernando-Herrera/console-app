const inquirer = require('inquirer')
const { HOME_CHOICES } = require('../config/choices')

const homePage = async () => {
  const { option } = await inquirer.prompt({
    type: 'list',
    name: 'option',
    message: 'Seleccione una opcion',
    choices: HOME_CHOICES,
  })

  return option
}

module.exports = {
  homePage,
}
