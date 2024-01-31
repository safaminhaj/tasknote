import { useEffect } from "react"

// type Tasktype = {
//     taskid: string,
//     userid: string,
//     title: string,
//     description: string,
//     // status: string,
//     dueDate: string
// }

export const ShowTask = (props: any) => {
    // let [tasks, setTasks] = useState<Tasktype[]>([]);

    useEffect(() => {
        // getTasksFromStorage();
        const tasksFromStorage = (localStorage.getItem("taskList"))
        if (tasksFromStorage) {
            props.setTasks(JSON.parse(tasksFromStorage))
        }
    }, [])

    return (
        <div >

            {props.tasks.map((task: any) => (
                <div>
                    <span>{task.title}</span>
                    <span >{task.description}</span>
                </div>

            ))}


        </div>
    )
}
