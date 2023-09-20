import { MenuBar, MenuIconContainer } from "./menuIcon.css";

type MenuIconProps = object;

const MenuIcon: React.FC<MenuIconProps> = () => {
    return (
        <div className={`${MenuIconContainer} open`}>
            <span id="top" className={`${MenuBar} top`}></span>
            <span id="bottom" className={`${MenuBar} bottom`}></span>
        </div>
    );
};

export default MenuIcon;
