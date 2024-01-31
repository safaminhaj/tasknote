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
    const user = JSON.parse(localStorage.getItem("loggedInUser")!)

    useEffect(() => {
        // getTasksFromStorage();
        const tasksFromStorage = (localStorage.getItem("taskList"))
        if (tasksFromStorage) {
            props.setTasks(JSON.parse(tasksFromStorage))
        }
    }, [])

    const usersTasks = (props.tasks).filter((t: any) => t.userid === user.userid)

    return (
        <div >

            {usersTasks.map((task: any) => (
                <div>
                    <span>{task.title}</span>
                    <span >{task.description}</span>
                </div>

            ))}


        </div>
    )
}
