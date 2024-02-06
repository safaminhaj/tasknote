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

interface propTypes {
    tasks: Tasktype[];
    setTasks: React.Dispatch<React.SetStateAction<Tasktype[]>>;
}

export const AddTask = ({ tasks, setTasks }: propTypes) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser")!);

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

        setTasks((prevTasks: Tasktype[]) => {
            return [...prevTasks, task];
        });

        console.log(tasks)
        setTask({
            taskid: "",
            userid: "",
            title: "",
            description: "",
            dueDate: ""
        })
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
                    Due Date : <input type='date' name='dueDate' value={task.dueDate} onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>ADD</button>
            </div>
        </div>
    )
}
