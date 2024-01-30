import { useEffect, useState } from "react"

type Tasktype = {
    taskid: string,
    userid: string,
    title: string,
    description: string,
    // status: string,
    dueDate: string
}

export const ShowTask = () => {

    const [tasks, setTasks] = useState<Tasktype[]>([]);

    useEffect(() => {
        const tasksFromStorage = localStorage.getItem("taskList");
        if (tasksFromStorage !== null) {
            setTasks(JSON.parse(tasksFromStorage));
        }
    }, []);

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.taskid}>
                        <p>
                            <span>{task.title}</span>
                            <span >{task.description}</span>
                        </p>

                    </li>
                ))}

            </ul>
        </div>
    )
}
