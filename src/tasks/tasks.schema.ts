import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    taskTitle: String, 
    taskDescription: String
  }//, {
   // timestemps: true       <- Mostra quando foi criado
   //}
  
  );


  export default model('Task', taskSchema)