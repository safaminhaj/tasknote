import { v4 as uuid } from 'uuid';
import { ChangeEvent } from "react";

type Tasktype = {
    taskid: string,
    userid: string,
    title: string,
    description: string,
    // status: string,
    dueDate: string
}

interface propTypes {
    taskList: Tasktype[];
    setTaskList: React.Dispatch<React.SetStateAction<Tasktype[]>>;
    task: Tasktype;
    setTask: React.Dispatch<React.SetStateAction<Tasktype>>;
}

export const AddTask = ({ taskList, setTaskList, task, setTask }: propTypes) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser")!);

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
        setTaskList([...taskList, task])
    }




    return (
        <div className="addtask">
            <div className="task-form">
                <label >
                    Title : <input type="text" onChange={handleChange} />
                </label>
                <label >
                    Description : <input type="text" onChange={handleChange} />
                </label>
                <label >
                    Due Date : <input type="text" onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>ADD</button>
            </div>
        </div>
    )
}
