// import { useEffect, useState } from 'react'
import { Sidebar } from '../../Common/Sidebar'
import { UserDetails } from '../../Common/UserDetails'
import './Task.scss'
import { AddTask } from '../AddTask/AddTask'
import { ShowTask } from '../ShowTask/ShowTask'
// import { useState } from 'react'
// import { v4 as uuid } from 'uuid';



export const Task = () => {
    const user = localStorage.getItem("loggedInUser")
    console.log(user)
    // let [taskList, setTaskList] = useState<Tasktype[]>([]);
    // useEffect(() => {
    //     localStorage.setItem("tasklist", JSON.stringify(taskList))
    // }, [taskList]);
    // const tasksFromStorage = localStorage.getItem("users");
    // setTaskList(tasksFromStorage ? JSON.parse(tasksFromStorage) : []);


    // let [taskList, setTaskList] = getTasksFromStorage([])

    // const [task, setTask] = useState({

    // })

    // useEffect(() => {
    //     localStorage.setItem("tasklist", JSON.stringify(taskList))
    // }, [taskList]);
    return (
        <div className="task-page">
            <Sidebar />
            <div className="tasks-container">
                <UserDetails />
                <AddTask />
                <ShowTask />
            </div>
        </div>
    )
}
