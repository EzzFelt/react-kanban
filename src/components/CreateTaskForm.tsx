import { PlusIcon } from "@radix-ui/react-icons"
import { Box, Button, Dialog, Flex, Text, TextArea, TextField, RadioGroup, Badge } from "@radix-ui/themes"
import { FormEventHandler } from "react"
import { z } from "zod"

export const CreateTaskForm: React.FC = () => {

    const createTaskSchema = z.object({
        title: z.string(),
        description: z.string(),
        status: z.enum(['todo', 'doing', 'done']),
        priority: z.enum(['low', 'medium', 'high'])
    })

    const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
        ev.preventDefault()

        const formData = new FormData(ev.currentTarget)
        const title = formData.get("title")
        const description = formData.get("description")
        const status = formData.get("status")
        const priority = formData.get("priority")

        const taskData = createTaskSchema.parse({title, description, status, priority})
        alert(JSON.stringify(taskData))
        ev.currentTarget.reset()
    }
    return(
        <Dialog.Root>
         <Dialog.Trigger>
            <Button>
               <PlusIcon /> Nova Tarefa
            </Button>
         </Dialog.Trigger>

            <Dialog.Content maxWidth="32rem">

           <Dialog.Title>Nova Tarefa</Dialog.Title>
            <Dialog.Description size="2" > 
                Adicione novas tarefas ao quadro
            </Dialog.Description>
              <form onSubmit={handleSubmit}>
                <Flex direction="column" gap="4">
                    <Box maxWidth="32rem">
                     <Box mb="2">
                       <Text as="label" htmlFor="title">Titulo</Text>
                     </Box>
                       <TextField.Root placeholder="Insira um título" name="title" id="title" autoFocus required></TextField.Root>
                    </Box>

                    <Box maxWidth="32rem">
                     <Box mb="2">
                       <Text as="label" htmlFor="description">Descrição</Text>
                     </Box>
                       <TextArea placeholder="Insira a descrição da tarefa" name="description" id="description" required></TextArea>
                    </Box>

                    <Flex gap="8">
                      <Box>
                        <Text as="div" mb={"2"}>Situações</Text>
                        <RadioGroup.Root name="status" defaultValue="todo">
                            <RadioGroup.Item value="todo" id="todo">
                                <Badge color="gray">
                                 Para Fazer    
                                </Badge>
                            </RadioGroup.Item>
                            <RadioGroup.Item value="doing" id="doing">
                                <Badge color="yellow">
                                 Em Progresso
                                </Badge>
                            </RadioGroup.Item>
                            <RadioGroup.Item value="done" id="done">
                                <Badge color="green">
                                    Concluída
                                </Badge>
                            </RadioGroup.Item>
                        </RadioGroup.Root>
                        </Box>

                        <Box>
                        <Text as="div" mb={"2"}>Prioridade</Text>
                        <RadioGroup.Root name="priority" defaultValue="low"> 
                            <RadioGroup.Item value="low" id="priority-low"> 
                               <Badge color="sky"> Baixa </Badge>
                            </RadioGroup.Item>

                            <RadioGroup.Item value="medium"> 
                               <Badge color="amber"> Média </Badge>
                            </RadioGroup.Item>

                            <RadioGroup.Item value="high"> 
                               <Badge color="tomato"> Alta </Badge>
                            </RadioGroup.Item>
                        </RadioGroup.Root>
                        </Box>
                    </Flex>
               
            
                <Flex justify="end" gap="4">
                    <Dialog.Close>
                        <Button color="gray" variant="soft">Cancelar</Button>
                    </Dialog.Close>
                    <Button type="submit"> Criar Tarefa </Button>
                </Flex>
              </Flex>
              </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}