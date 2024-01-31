// import { useEffect, useState } from 'react'
import { Sidebar } from '../../Common/Sidebar'
import { UserDetails } from '../../Common/UserDetails'
import './Task.scss'
import { AddTask } from '../AddTask/AddTask'
import { ShowTask } from '../ShowTask/ShowTask'
import { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
// import { useState } from 'react'
// import { v4 as uuid } from 'uuid';


type Tasktype = {
    taskid: string,
    userid: string,
    title: string,
    description: string,
    // status: string,
    dueDate: string
}



export const Task = () => {

    const user = localStorage.getItem("loggedInUser")
    console.log(user)

    const [tasks, setTasks] = useState<Tasktype[]>(() => {
        const tasksFromStorage = localStorage.getItem("taskList");
        return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
    });

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(tasks))
    }, [tasks])

    return (
        <div className="task-page">
            <Sidebar />
            <div className="tasks-container">
                <UserDetails />
                <AddTask tasks={tasks} setTasks={setTasks} />
                <ShowTask tasks={tasks} />
            </div>
        </div>
    )
}
