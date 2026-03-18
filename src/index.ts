import mysql from 'mysql2/promise';

try {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'aula1',
  });
//const preparacao = await connection.prepare("select * from pessoa");
const id = 5
const nome = "marcos');drop database aula1;#"
const preparacao = 
 await connection
.prepare(`insert into pessoa (id,nome) values (${id},'${nome}')`);
  const [resultado,campus] = await preparacao.execute([])
  console.log(resultado)
  await connection.end();
}catch (err) {
  console.log(err);
}