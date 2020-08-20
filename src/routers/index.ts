import Routers from '../constants/routers'
import homeController from '../controllers/home'

export function routersHandler(app) {
  console.log('Init routers...')

  app.get(Routers.HOME, homeController)
}
