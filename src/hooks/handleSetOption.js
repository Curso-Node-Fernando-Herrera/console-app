const { VALUE_HOME } = require('../config/choices')
const createNewTask = require('../functions/createNewTask')
const listTasks = require('../functions/listTasks')
const removeTask = require('../functions/removeTask')

const allOptions = {
  [VALUE_HOME.NEW_TASK]: createNewTask,
  [VALUE_HOME.LIST_TASK]: listTasks,
  [VALUE_HOME.LIST_COMPLETED_TASK]: () => {},
  [VALUE_HOME.LIST_PENDING_TASK]: () => {},
  [VALUE_HOME.COMPLETE_TASKS]: () => {},
  [VALUE_HOME.DELETE_TASK]: removeTask,
}

const handleSetOption = async (option) => {
  await allOptions[option]()
}

module.exports = handleSetOption
