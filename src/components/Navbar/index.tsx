import { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import SidebarMenu from "./SidebarMenu";
import { disableScroll, enableScroll } from "../../utils/scroll";

type NavbarProps = object;

const Navbar: React.FC<NavbarProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMenuIconClick = () => {
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
        <div className="fixed w-screen z-50">
            <MenuIcon handleClick={handleMenuIconClick} isOpen={isOpen} />
            <SidebarMenu isOpen={isOpen} onClick={handleMenuIconClick} />
        </div>
    );
};

export default Navbar;
