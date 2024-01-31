import { v4 as uuid } from 'uuid';
import { ChangeEvent, useState } from "react";

type Tasktype = {
    taskid: string,
    userid: string,
    title: string,
    description: string,
    // status: string,
    dueDate: string
}

// interface propTypes {
//     taskList: Tasktype[];
//     setTaskList: React.Dispatch<React.SetStateAction<Tasktype[]>>;
//     task: Tasktype;
//     setTask: React.Dispatch<React.SetStateAction<Tasktype>>;
// }

export const AddTask = (props: any) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser")!);
    // let [taskList, setTaskList] = useState<Tasktype[]>([]);

    // function getTasksFromStorage() {
    //     const tasksFromStorage = localStorage.getItem("taskList");
    //     return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
    // }
    // let taskList: Tasktype[] = getTasksFromStorage()

    function getTasksFromStorage() {
        const tasksFromStorage = (localStorage.getItem("taskList"))
        if (tasksFromStorage) {
            return JSON.parse(tasksFromStorage)
        }
        else {
            return []
        }
    }


    // useEffect(() => {
    //  let tasks = getTasksFromStorage();
    // }, [])
    let tasks = getTasksFromStorage()

    const [task, setTask] = useState<Tasktype>(
        {
            taskid: "",
            userid: "",
            title: "",
            description: "",
            dueDate: ""
        }
    )


    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setTask({
            ...task,
            taskid: uuid(),
            userid: user.userid,
            [name]: value
        })
    }

    function handleSubmit() {
        console.log(task)
        // tasks.push(task)
        props.setTasks([...props.tasks, task])
        localStorage.setItem("taskList", JSON.stringify(tasks))
        console.log(tasks)
    }




    return (
        <div className="addtask">
            <div className="task-form">
                <label >
                    Title : <input type="text" name="title" value={task.title} onChange={handleChange} />
                </label>
                <label >
                    Description : <input type="text" name="description" value={task.description} onChange={handleChange} />
                </label>
                <label >
                    Due Date : <input type="text" name='dueDate' value={task.dueDate} onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>ADD</button>
            </div>
        </div>
    )
}
