import MenuIcon from "./MenuIcon";
import SidebarMenu from "./SideBarMenu";

type NavbarProps = object;

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div>
            {/* <MenuIcon /> */}
            <SidebarMenu />
        </div>
    );
};

export default Navbar;
