import { useContext } from "react"
import { TasksContext } from "../contexts/taskContext"


export const useTasks = () => {
    return useContext(TasksContext)
}