// postgres no ubuntu roda na porta 5433, e nao na 5432!!
// usar comando sudo lsof -i -P -n | grep LISTEN
// para ver quais portas estao sendo usadas

// error: password authentication failed for user "postgres"
// eu resolvi criando um super usuario no postgresql da seguinte forma:
// 1) CREATE USER nomedousuario SUPERUSER INHERIT CREATEDB CREATEROLE;
// 2) ALTER USER nomedousuario PASSWORD 'novaSenha';


module.exports = {
	client: 'postgresql',
	connection: {
		database: 'knowledge',
		port: 5433,
		user:     'admin',
		password: 'admin'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
