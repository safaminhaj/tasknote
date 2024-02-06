

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
}

export const ShowTask = ({ tasks }: propTypes) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser")!)

    console.log(tasks)

    const usersTasks = (tasks).filter((t: any) => t.userid === user.userid)

    return (
        <div >

            {usersTasks.map((task: any) => (
                <div key={task.taskid}>
                    <span>{task.title}</span>
                    <span >{task.description}</span>
                    <span>{task.dueDate}</span>
                </div>

            ))}


        </div>
    )
}
