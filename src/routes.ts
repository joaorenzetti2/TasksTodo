import { Router } from "express";
import taskController from "./tasks/tasks.controller";

const routes = Router()

routes.post('/Tasks', taskController.create)

routes.get('/Tasks', taskController.findAll)

routes.get('/Tasks/:id', taskController.findById)

routes.put('/Tasks/:id', taskController.update)

routes.delete('/Tasks/:id', taskController.delete)

export { routes }