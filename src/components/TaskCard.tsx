import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"
import { Task, TaskPriority, TaskStatus } from "../entities/Task"

interface TaskCardProps {
    task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
     const getActionText = (status: TaskStatus) => {
        const actionsText = {
            "todo": "Iniciar",
            "doing": "Finalizar",
            "done": "Arquivar"
        }

        return actionsText[status]
     }

     const getActionColor = (status: TaskStatus) => {
        const actionColor: {[key: string]: "indigo" | "green" | "bronze" } = {
            "todo": "indigo",
            "doing": "green",
            "done": "bronze"
        }
         return actionColor[status]
     }



      const getColorPriority = (priority: TaskPriority) => {
        const priorityColor: {[key: string]: "sky" | "amber" | "tomato"} = {
            "low": "sky",
            "medium": "amber",
            "high": "tomato"
        }

        return priorityColor[priority]
      }

      return(
        <>
        <Card>
          <Flex align="center" gap="4">
           <Heading as="h3" size="3">{task.title}</Heading>
           <Badge color={getColorPriority(task.priority)}>{task.priority}</Badge>
          </Flex>

          <Text as="p" my={"4"}>{task.description}</Text>

          <Flex gap={"2"}>
            {task.status !== "done" && (
            <Button color={getActionColor(task.status)}>{getActionText(task.status)}</Button>
            )}
            <Button color="red">Excluir</Button>
          </Flex>
        </Card>
        </>
      )
}