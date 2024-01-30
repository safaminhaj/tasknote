import './SignUp.scss'
import { v4 as uuid } from 'uuid';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
    userid: string;
    fname: string;
    username: string;
    password: string;
};
export const SignUp = () => {

    const [user, setUser] = useState({
        userid: "",
        fname: "",
        username: "",
        password: ""
    })

    const navigate = useNavigate()

    function getUsersFromStorage(): User[] {
        const usersFromStorage = localStorage.getItem("users");
        return usersFromStorage ? JSON.parse(usersFromStorage) : [];
    }

    let users = getUsersFromStorage()

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setUser({
            ...user,
            userid: uuid(),
            [name]: value
        }

        )
    }



    function onSubmit() {
        const existingUsers: User[] = users as User[]
        const duplicate = existingUsers.some((temp: User) => temp.username == user.username)
        if (duplicate) {
            toast.error("username not available", {
                position: "top-center",
            });
            setUser({
                userid: "",
                fname: "",
                username: "",
                password: ""
            })
        }
        else {
            console.log(user)
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users))
            const loggedUser = (users as User[]).find(
                (temp: User) =>
                    temp.username === user.username
            );
            localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
            navigate('/menu')

            setUser({
                userid: "",
                fname: "",
                username: "",
                password: ""
            })
        }
    }

    return (
        <div className='signup-form' >
            <ToastContainer />
            <div className='form'>
                <div className="form-input">
                    <label >
                        Name :
                    </label>
                    <input type="text" name='fname' value={user.fname} onChange={handleChange} />
                </div>
                <div className="form-input">
                    <label >
                        Username :
                    </label>
                    <input type="text" name='username' value={user.username} onChange={handleChange} />
                </div>
                <div className="form-input">
                    <label >
                        Password :
                    </label>
                    <input type="password" name='password' value={user.password} onChange={handleChange} />
                </div>
                <button onClick={onSubmit}>Submit</button>
                <span>
                    <p>Have an account? </p>
                    <a href="/login">Login</a>
                </span>
            </div>
        </div>

    )
}
