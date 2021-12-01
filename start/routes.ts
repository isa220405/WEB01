/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post("/register","AuthController.register")
Route.post("/login","AuthController.login")
Route.post("/indicacao","IndicacaosController.create")
Route.post("/periodo","PeriodosController.create")
Route.post("/resumo","ResumosController.create")
Route.get("/showIndicacao/:id","IndicacaosController.show")
Route.get("/showPeriodo/:id","PeriodosController.show")
Route.get("/showResumo/:id","ResumosController.show")
Route.post("/Updateindicacao","IndicacaosController.create")
Route.post("/Updateperiodo","PeriodosController.create")
Route.post("/Updateresumo","ResumosController.create")

