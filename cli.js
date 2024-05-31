#!/usr/bin/env node

const { execSync } = require("child_process");
const { program } = require('commander')


function build (){
  execSync("webpack --stats-error-details", { stdio: "inherit" });
}

function dev (){
  execSync(
    "nodemon --ext jsx,tsx,js,json  --watch ./src --watch createApp.js --watch webpack.config.js --exec yarn webpack",
    { stdio: "inherit" }
  );
}

function babel (){
  execSync("babel --extensions .js,.jsx ./src -d ./build", {
    stdio: "inherit",
  });
}

program
    .command('babel')
    .description('Babel build')
    .action(babel)

program
    .command('dev')
    .description('dev build in watch mode')
    .action(dev)

program
    .command('build')
    .description('build the app')
    .action(build)

program.parse();

