const readTasks = require('../hooks/readTasks')
const Task = require('./task')

class Tasks {
  get listArr() {
    const arrayTasks = Object.entries(this._listTasks)
    return arrayTasks.map(([, value]) => value)
  }

  constructor() {
    this._listTasks = readTasks()
  }

  createTask(desc = '') {
    const newTask = new Task(desc)
    this._listTasks[newTask.uid] = { ...newTask }
  }
}

module.exports = Tasks
