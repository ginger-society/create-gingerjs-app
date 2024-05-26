#!/usr/bin/env node

const { execSync } = require("child_process");
const { program } = require('commander')


function webpack (){
  execSync("webpack --stats-error-details", { stdio: "inherit" });
}
function build (){
  execSync("babel --extensions .js,.jsx ./src -d ./build", {
    stdio: "inherit",
  });
}
function dev (){
  execSync(
    "nodemon --ext jsx,tsx,js,json  --watch ./src --watch createApp.js --watch webpack.config.js --exec yarn webpack",
    { stdio: "inherit" }
  );
}

program
    .command('dev')
    .description('dev build in watch mode')
    .action(dev)

program
    .command('build')
    .description('babel build')
    .action(build)
program
    .command('webpack')
    .description('build the app(after babel build)')
    .action(webpack)


program.parse();

