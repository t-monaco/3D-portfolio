import { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import SidebarMenu from "./SidebarMenu";
import { disableScroll, enableScroll } from "../../utils/scroll";

type NavbarProps = object;

const Navbar: React.FC<NavbarProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [isOpen]);

    return (
        <div className="fixed w-screen">
            <MenuIcon handleClick={handleClick} isOpen={isOpen} />
            <SidebarMenu isOpen={isOpen} />
        </div>
    );
};

export default Navbar;
