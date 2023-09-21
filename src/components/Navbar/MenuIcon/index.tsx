import { MenuBar, MenuIconContainer } from "./menuIcon.css";

type MenuIconProps = { handleClick: () => void; isOpen: boolean };

const MenuIcon: React.FC<MenuIconProps> = ({ handleClick, isOpen }) => {
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
