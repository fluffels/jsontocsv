import fs from 'fs'
import csv from 'fast-csv'

const inputFilename = process.argv[2]
const input = fs.readFileSync(inputFilename, 'utf-8')
const yml = YAML.parse(input)

const json = JSON.stringify(yml, null, 2)
const outputFilename = `${inputFilename}.json`
fs.writeFileSync(outputFilename, json)
