import { Badge, Flex, Grid } from "@radix-ui/themes"
import { Task } from "../entities/Task"

export const TaskBoard: React.FC = () => {

    const tasksTodo: Task[] = [
        {
            "id": 4,
            "title": "Implementar testes",
            "description": "Desenvolver os testes automatizados na nova funcionalidade do aplicativo.",
            "status": "todo",
            "priority": "medium"
        }
    ]
    const tasksInProgress: Task[] = [
        {
            "id": 1,
            "title": "Enviar relatório",
            "description": "Enviar o relatório mensal para o departamento financeiro.",
            "status": "doing",
            "priority": "high"
        }
    ]
    const tasksDone: Task[] = [
        {
            "id": 3,
            "title": "Atualizar o site",
            "description": "Fazer atualizações no site da empresa com novas informações.",
            "status": "done",
            "priority": "medium"
          }
    ]

    return(
        <Grid columns={"3"} gap="4" minWidth={"64rem"}>
            <Flex direction="column" gap={"4"}>
              <Badge color="sky">A fazer</Badge>
            </Flex>

            <Flex direction="column" gap={"4"}>
              <Badge color="amber">Em Progresso</Badge>
            </Flex>

            <Flex direction="column" gap={"4"}>
              <Badge color="green">Concluída</Badge>  
            </Flex>
        </Grid>
    )
}