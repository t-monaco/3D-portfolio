import { useState } from "react";
import { MenuBar, MenuIconContainer } from "./menuIcon.css";

type MenuIconProps = object;

const MenuIcon: React.FC<MenuIconProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`${MenuIconContainer} ${isOpen ? "open" : ""}`}
            onClick={() => handleClick()}
        >
            <span id="top" className={`${MenuBar}`}></span>
            <span id="bottom" className={`${MenuBar}`}></span>
        </div>
    );
};

export default MenuIcon;
