#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const { replaceStr } = require('./lib/files');

program
    .name('dosmth cli')
    .description('CLI to do something with files or something.')
    .version('0.0.1');

// File commands
program.command('replaceStr')
    .description('Replace a string with another string for all file names in directory. If no replacement string is provided, string will be cut.')
    .argument('<string>', 'string to replace')
    .option('-r, --with <string>', 'replace with', '')
    .action((str, options) => replaceStr(str, options));

program.parse()