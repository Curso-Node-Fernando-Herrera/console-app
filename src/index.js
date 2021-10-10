const { homePage } = require('./bin/inquirers')
const { VALUE_HOME } = require('./config/choices')
const handleSetOption = require('./hooks/handleSetOption')

const main = async () => {
  const option = await homePage()

  if (option === VALUE_HOME.GET_OUT) return
  await handleSetOption(option)

  main()
}

main()
