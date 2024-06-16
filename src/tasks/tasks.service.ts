import taskModel from './tasks.schema'
import { taskType } from './tasks.type'

class taskService {
   
  async create(task: taskType){
     const createdTask = await taskModel.create(task)
     return createdTask
  }
  
  async findAll() {
    const findedTask = await taskModel.find()
    return findedTask
  }

  async findById(id: string) {
    const findedTask = await taskModel.findById(id)
    return findedTask
  }

  async update(id: string, task: taskType) {
    const updatedTask = await taskModel.findByIdAndUpdate(id, {
        taskTitle: task.taskTitle,
        taskDescription: task.taskDescription
    }, {new: true} )

    return updatedTask
  }

  async delete(id: string) {
    try {
          await taskModel.findByIdAndDelete(id)
          return "Tarefa removido com sucesso"
   
        } catch (error) {
        throw new Error(`Ocorreu um erro ao remover a tarefa: ${error}`)    
   } 
   


  }

}

export default new taskService()