const server = require('./src/server')
const db = require('./src/lib/db') // Se levanta la conexión a la base de datos

async function main () {
  await db.connect()
  console.log('- DB CONNECTED -')
  server.listen(8083, () => {
    console.log('SERVER')
  })
}

main()
  .then(() => {
    console.log('server ready')
  })
  .catch(error => console.error('ERROR:', error))
