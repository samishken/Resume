
const fs = require('fs')

newFunction()

fs.readFile(__dirname + '/info.json', 'utf8', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
    return data
  }
})
