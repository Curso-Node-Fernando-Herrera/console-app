const { v4: uuidv4 } = require('uuid')

class Task {
  constructor(desctiption = '') {
    this.uid = uuidv4()
    this.desctiption = desctiption
    this.finishedAt = null
  }
}

module.exports = Task
