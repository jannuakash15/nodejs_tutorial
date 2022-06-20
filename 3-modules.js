// CommonJS - every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternate_flavors')

require('./7-mind_grenade')

sayHi("Akash") 
sayHi(names.john)
sayHi(names.peter)


