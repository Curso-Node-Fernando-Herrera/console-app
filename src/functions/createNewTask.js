const Tasks = require('../models/tasks')
const { setInput } = require('../hooks/setInput')
const saveStaticTasks = require('../hooks/saveStaticTasks')

const tasks = new Tasks()

const createNewTask = async () => {
  const value = await setInput('Introduce tu nueva nota:')
  tasks.createTask(value)
  saveStaticTasks(tasks.listArr)

  console.log(`\n${'Nota creata correctamente!'} \n`)
}

module.exports = createNewTask
