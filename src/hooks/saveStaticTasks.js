const fs = require('fs')
const { STATIC_DIR } = require('../config/variables')

const saveStaticTasks = (data) => {
  fs.writeFileSync(STATIC_DIR, JSON.stringify(data))
}

module.exports = saveStaticTasks
