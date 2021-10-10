const fs = require('fs')
const { STATIC_DIR } = require('../config/variables')

const readTasks = () => {
  const isDataExist = fs.readFileSync(STATIC_DIR, { encoding: 'utf-8' })
  return JSON.parse(isDataExist) || null
}

module.exports = readTasks
