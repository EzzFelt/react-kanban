import { useEffect, useState } from "react";
import React, { createContext, ReactNode} from "react";
import { Task } from "../entities/Task";
import { tasksService } from "../services/api";

export interface TasksContextData {
    tasks: Task[],
    createTask: (attribute: Omit<Task, "id">) => Promise<void>,
    updateTask: (id: number, attribute: Partial<Omit<Task, "id">>) => Promise<void>,
    deleteTask: (id: number) => Promise<void>
}


export const TasksContext = createContext({} as TasksContextData)

interface TasksContextProviderProps{
    children: ReactNode
}

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({ children }) => {

        const [ tasks, setTasks] = useState<Task[]>([])
    
        useEffect(() => {
            tasksService.fetchTasks().then(data => setTasks(data))
        }, [tasks])

        const createTask = async ( attributes: Omit<Task, "id">) => {
            const { newTask } = await tasksService.createTask(attributes)
            setTasks((currentState) => {
              const updatedTasks = [...currentState, newTask]
              return updatedTasks
            })
        }

        const updateTask = async (id: number, attributes: Partial<Omit<Task, "id">>) => {

        }


        const deleteTask = async (id:number) => {

        }    

        return(
        <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask}}>
            {children}
        </TasksContext.Provider>
        )
        
}