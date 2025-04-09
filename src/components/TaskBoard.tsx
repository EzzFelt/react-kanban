import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes"
import { Task } from "../entities/Task"
import { TaskCard } from "./TaskCard"
import { useTasks } from "../hooks/useTasks"

export const TaskBoard: React.FC = () => {
  const { tasks = [] } = useTasks()

  const tasksTodo: Task[] = tasks ? tasks.filter((task) => task?.status === "todo") : []
  const tasksInProgress: Task[] = tasks ? tasks.filter((task) => task?.status === "doing") : []
  const tasksDone: Task[] = tasks ? tasks.filter((task) => task?.status === "done") : []

    return(
        <ScrollArea scrollbars="horizontal">
        <Grid columns={"3"} gap="4" minWidth={"64rem"}>
            <Flex direction="column" gap={"4"}>
              <Badge color="sky">A fazer</Badge>


              {tasksTodo.map((task) => <TaskCard key={task.id} task={task} />)}
            </Flex>

            <Flex direction="column" gap={"4"}>
              <Badge color="amber">Em Progresso</Badge>

              {tasksInProgress.map((task) => <TaskCard key={task.id} task={task} />)}
            </Flex>

            <Flex direction="column" gap={"4"}>
              <Badge color="green">Concluída</Badge>  

              {tasksDone.map((task) => <TaskCard key={task.id} task={task} />)}
            </Flex>
        </Grid>
        </ScrollArea>
    )
}