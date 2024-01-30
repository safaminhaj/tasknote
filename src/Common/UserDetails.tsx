
export const UserDetails = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser")!);
    return (
        <div className="user-details">
            <h3>{user.username}</h3>
        </div>
    )
}
