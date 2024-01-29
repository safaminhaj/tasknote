// import { useState } from 'react';
import './SignUp.scss'
import { v4 as uuid } from 'uuid';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from 'react';

type User = {
    userid: string;
    fname: string;
    username: string;
    password: string;
};
export const SignUp = () => {

    // const [user, setUser] = useState({
    //     userid: "",
    //     fname: "",
    //     username: "",
    //     password: ""
    // })

    const formRef = useRef<HTMLFormElement>(null);

    let user: User = {
        userid: "",
        fname: "",
        username: "",
        password: ""
    };

    // const [users, setUsers] = useState<User[]>(
    //     () => {
    //         const usersFromStorage = localStorage.getItem("users");
    //         return usersFromStorage ? JSON.parse(usersFromStorage) : [];

    //     });

    function getUsersFromStorage(): User[] {
        const usersFromStorage = localStorage.getItem("users");
        return usersFromStorage ? JSON.parse(usersFromStorage) : [];
    }

    let users = getUsersFromStorage()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);
        user =
            ({

                userid: uuid(), // assuming uuid() is a function that generates a UUID
                fname: formData.get("fname") as string, // Typecasting as string because formData.get can return null
                username: formData.get("username") as string,
                password: formData.get("Password") as string, // Make sure this matches the 'name' attribute of your password input
            })

        const existingUsers = users
        const duplicate = existingUsers.some((temp) => temp.username == user.username)
        if (duplicate) {
            toast.error("username not available", {
                position: "top-center",
            });
        }
        else {
            // setUsers(prevUsers => [...prevUsers, user]
            // )
            users.push(user)
            console.log(users)
            localStorage.setItem("users", JSON.stringify(users))
            formRef.current?.reset();
        }


    }

    return (
        <div className='signup-form' >
            <ToastContainer />
            <form action="" onSubmit={handleSubmit}>
                <div className="form-input">
                    <label >
                        Name :
                    </label>
                    <input type="text" name='fname' />
                </div>
                <div className="form-input">
                    <label >
                        Username :
                    </label>
                    <input type="text" name='username' />
                </div>
                <div className="form-input">
                    <label >
                        Password :
                    </label>
                    <input type="password" name='Password' />
                </div>
                <button type="submit">Submit</button>
                <span>
                    <p>Have an account? </p>
                    <a href="/login">Login</a>
                </span>
            </form>
        </div>

    )
}
