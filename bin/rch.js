#!/usr/bin/env node

'use strict'; // eslint-disable-line
const program = require('commander');
const path = require('path');
const rch = require('../src/rch');

program
  .version('1.1.0')
  .usage('[opts] <path/to/rootComponent>')
  .option(
    '-m, --module-dir <dir>',
    'Path to additional modules not included in node_modules e.g. src',
  )
  .option('-c, --hide-containers', 'Hide redux container components')
  .option('-t, --hide-third-party', 'Hide third party components')
  .description('React component hierarchy viewer.')
  .parse(process.argv);

if (!program.args[0]) {
  program.help();
}

const {
  hideContainers,
  moduleDir,
  hideThirdParty,
  flatten,
} = program;

const filename = path.resolve(program.args[0]);

rch.doIt(filename, {
  hideContainers,
  moduleDir,
  hideThirdParty,
  formatted: true,
  flatten: false,
});
