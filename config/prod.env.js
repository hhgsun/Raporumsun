module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true, // this overrides the DEBUG_MODE value of prod.env
  DEVELOPER: 'hhgsun',
  VUE_APP_HHG: 'hhgsun_vue'
})


/* module.exports = {
  NODE_ENV: '"development"',
  DEBUG_MODE: true, // this overrides the DEBUG_MODE value of prod.env
  DEVELOPER: 'hhgsun',
} */