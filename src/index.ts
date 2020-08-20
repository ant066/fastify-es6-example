import fastify from 'fastify'
import { routersHandler } from './routers'

const app = fastify({
  logger: true,
})

routersHandler(app)

app.listen((process.env.PORT || 3000) as number, '0.0.0.0', function (err, address) {
  if (err) {
    this.app.log.error(err)
    process.exit(1)
  }

  console.clear()
  console.log('The app is listening at port:', address)
})
