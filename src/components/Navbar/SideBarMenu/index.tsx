import { SidebarMenuContainer } from "./sidebarMenu.css";

type SidebarMenuProps = object;

const SidebarMenu: React.FC<SidebarMenuProps> = () => {
    return (
        <div className={`${SidebarMenuContainer}`}>
            <section>
                <h2>Navigation</h2>
                <ul className="flex flex-col list-none">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </section>
            <section className="social">
                <h2>Socials</h2>
                <ul>
                    <li>LinkedId</li>
                    <li>Github</li>
                    <li>Mail</li>
                </ul>
            </section>
        </div>
    );
};

export default SidebarMenu;
