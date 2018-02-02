// import { promisify } from 'util'
// import { resolve } from 'path'
// import { readFile, writeFileSync as wfs} from 'fs'
// import * as qs from 'querystring'

// promisify(readFile)(resolve(__dirname, '../package.json'))
//   .then(data => {
//     data = JSON.parse(data)

//     console.log(data.name)

//     wfs(resolve(__dirname, './name'), String(data.name), 'utf8')
//   })

import { name, getName } from './export'
// console.log(name)
// console.log(getName())

import {
  name2 as name3,
  getName2 as getName3,
  age
} from './export'
console.log(name3)
console.log(getName3())
console.log(age)

import { promisify } from 'util'
import { resolve } from 'path'
import fs from 'fs'

const readAsync = promisify(fs.readFile)
async function init() {
  let data = await readAsync(resolve(__dirname, '../package.json'))
  data = JSON.parse(data)

  console.log(data.name)
}
init()
