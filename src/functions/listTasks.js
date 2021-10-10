const inquire = require('inquirer')
require('colors')
const readTasks = require('../hooks/readTasks')

const listOfTasks = () => {
  const tasks = readTasks()

  return tasks.map(({ desctiption, uid, finishedAt }, index) => {
    const isCompleted = finishedAt ? 'Completada'.green : 'Pendiente'.red
    return {
      name: `${index + 1}. ${desctiption} :: ${isCompleted}`,
      value: uid,
    }
  })
}

const listTasks = async () => {
  const { tasks } = await inquire.prompt({
    type: 'list',
    name: 'tasks',
    message: 'Lista de tus tareas:',
    choices: listOfTasks(),
  })

  return tasks
}

module.exports = listTasks
