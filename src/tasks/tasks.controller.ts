import { Request, Response } from 'express'; 
import tasksService from './tasks.service';

class tarefaController {
   async create(req: Request, res: Response) {
        const createdTask = await tasksService.create(req.body)
        res.status(201)
        return res.json(createdTask)
    }

 
    async findAll(req: Request, res: Response) {
        const findedTask = await tasksService.findAll()
        res.status(200)
        return res.json(findedTask)
    }


    async findById(req: Request, res: Response) {
        const findedTask = await tasksService.findById(req.params.id)
        res.status(200)
        return res.json(findedTask)
    }

    async update(req: Request, res: Response) {
        const updatedTask = await tasksService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedTask)
    }

    async delete(req: Request, res: Response) {
        const deleted = await tasksService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }

}

export default new tarefaController()