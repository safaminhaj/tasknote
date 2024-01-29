import { FaNoteSticky } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export const Menu = () => {
    const navigate = useNavigate();

    const handleIconClick = (path: string) => {
        navigate(path);
    }
    return (
        <div className="menu">
            <FaNoteSticky className="menu-icon" onClick={() => handleIconClick('/notes')} />
            <FaTasks className="menu-icon" onClick={() => handleIconClick('/tasks')} />
        </div>
    )
}
