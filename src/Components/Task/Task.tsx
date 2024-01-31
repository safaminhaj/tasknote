// import { useEffect, useState } from 'react'
import { Sidebar } from '../../Common/Sidebar'
import { UserDetails } from '../../Common/UserDetails'
import './Task.scss'
import { AddTask } from '../AddTask/AddTask'
import { ShowTask } from '../ShowTask/ShowTask'
import { useState } from 'react'
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

    // function getTasksFromStorage() {

    //     else {
    //         return []
    //     }
    // }

    const [tasks, setTasks] = useState<Tasktype[]>([])




    return (
        <div className="task-page">
            <Sidebar />
            <div className="tasks-container">
                <UserDetails />
                <AddTask tasks={tasks} setTasks={setTasks} />
                <ShowTask tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    )
}
