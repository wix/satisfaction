#!/usr/bin/env node

'use strict'

var satisfaction = require('.')

var ops = {
  dir: process.cwd()
}

if (!satisfaction.status(ops)) {
  throw new Error('node_modules does not satisfy package.json:\n' + satisfaction.violations(ops).join('\n') + '\n')
}