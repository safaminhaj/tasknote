import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';

type User = {
    userid: string;
    fname: string;
    username: string;
    password: string;
};

export const Login = () => {

    let navigate = useNavigate()

    // function getUsersFromStorage(): User[] {
    //     const usersFromStorage = localStorage.getItem("users");
    //     return usersFromStorage ? JSON.parse(usersFromStorage) : [];
    // }

    // let users = getUsersFromStorage()
    let users: User[] = []
    useEffect(() => {
        const usersFromStorage = localStorage.getItem("users");
        users = usersFromStorage ? JSON.parse(usersFromStorage) : [];

    }, [])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const userExists = users.some((user: User) => user.username === formData.get("username") && user.password === formData.get("Password"));
        if (userExists) {
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
            <form onSubmit={handleSubmit} >
                <label>
                    Username: <input type="text" name='username' />
                </label>
                <label >
                    Password: <input type="password" name='Password' />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
