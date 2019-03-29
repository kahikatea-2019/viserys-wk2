const fs = require('fs')

const jsonToJs = (jsonData) => {
  return JSON.parse(jsonData)
}

const jsToJson = (jsData) => {
  return JSON.stringify(jsData)
}

const readFile = (filePath, callback) => {
  fs.readFile(filePath, (err, contents) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    } else {
      callback(contents)
    }
  })
}

const writeFile = (dataToWrite, filePath, callback) => {
  fs.writeFile(filePath, dataToWrite, (err, contents) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    } else {
      // eslint-disable-next-line no-console
      console.log('Data updated!')
      callback()
    }
  })
}

module.exports = {
  readFile,
  writeFile,
  jsToJson,
  jsonToJs
}
