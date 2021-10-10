const inquirer = require('inquirer')
const readTasks = require('../hooks/readTasks')
const saveStaticTasks = require('../hooks/saveStaticTasks')
const listTasks = require('./listTasks')

const handleSaveStatics = (taskSelected) => {
  const tasks = readTasks()
  const newTaskes = tasks.filter(({ uid }) => uid !== taskSelected)
  saveStaticTasks(newTaskes)

  console.log('\nTarea borrada correectamente! \n')
}

const removeTask = async () => {
  const taskSelected = await listTasks()
  const { confirm } = await inquirer.prompt({
    type: 'confirm',
    name: 'confirm',
    message: 'Seguro deseas eliminar?',
  })

  confirm
    ? handleSaveStatics(taskSelected)
    : console.log('\nNo se ha borrado ninguna tarea. \n')
}

module.exports = removeTask
