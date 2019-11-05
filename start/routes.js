'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')
Route.get('/tasks', 'TaskController.index')
Route.on('/add').render('add')
Route.post('/add', 'TaskController.store')
Route.get('/task/:id', 'TaskController.detail')
Route.get('delete/:id', 'TaskController.destroy')
Route.get('/edit/:id', 'TaskController.edit')
Route.post('/update/:id', 'TaskController.update')
// Route.get('/test', () => 'Hello World')
// Route.get('/test/:id', function({params}) {
//     return `this is the id ${params.id}`
// });
// Route.get('/task', 'TaskController.index')
