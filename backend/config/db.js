const config = require('../knexfile.js')
const knex = require('knex')(config)

// executa as migrations no momento que inicia o backend
knex.migrate.latest([config])
console.log('Rodando as migrations no Banco de Dados')

module.exports = knex