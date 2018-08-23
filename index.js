#!/usr/bin / env node

require('dotenv').load();

//https://developer.atlassian.com/blog/2015/11/scripting-with-node/

const env_vars = [
  "CMSDBSYNC_AWS_ACCESS_KEY_ID",
  "CMSDBSYNC_AWS_SECRET_ACCESS_KEY",
  "CMSDBSYNC_AWS_BUCKET"
]

checkEnv = () => {
  env_vars.forEach( (v) => {
    if(!process.env[v]) {
      showError(`${v} must be set in ENV`);
    }
  })
}

showError = (message) => {
  console.log(`ERROR: ${message}`);
}

checkEnv()

