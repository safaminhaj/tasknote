import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChangeEvent, useState } from 'react';

type User = {
    userid: string;
    fname: string;
    username: string;
    password: string;
};

export const Login = () => {

    const [logUser, setLogUser] = useState({
        username: "",
        password: ""
    })

    let navigate = useNavigate()

    function getUsersFromStorage(): User[] {
        const usersFromStorage = localStorage.getItem("users");
        return usersFromStorage ? JSON.parse(usersFromStorage) : [];
    }

    let users = getUsersFromStorage()
    // let users: User[] = []
    // useEffect(() => {
    //     const usersFromStorage = localStorage.getItem("users");
    //     users = usersFromStorage ? JSON.parse(usersFromStorage) : [];

    // }, [])

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setLogUser({
            ...logUser,
            [name]: value
        })
    }

    function onSubmit() {
        const existingUsers: User[] = users as User[]
        // const duplicate = existingUsers.some((temp: User) => temp.username == user.username)
        const userExists = existingUsers.some((temp: User) => temp.username === logUser.username && temp.password === logUser.password)
        if (userExists) {
            const loggedUser = (users as User[]).find(
                (temp: User) =>
                    temp.username === logUser.username
            );
            localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
            navigate('/menu')

            console.log("okay")
        } else {
            toast.error("Username or password is incorrect", {
                position: "top-center"
            })
        }



    }

    return (
        <div className="login-form">
            <ToastContainer />
            <div className='form' >
                <label>
                    Username: <input type="text" name='username' value={logUser.username} onChange={handleChange} />
                </label>
                <label >
                    Password: <input type="password" name='password' value={logUser.password} onChange={handleChange} />
                </label>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}
