#!/usr/bin / env node

#https://developer.atlassian.com/blog/2015/11/scripting-with-node/

const env_vars = [
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY"
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

