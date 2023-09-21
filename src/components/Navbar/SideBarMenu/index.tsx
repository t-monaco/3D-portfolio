import { SidebarMenuContainer } from "./sidebarMenu.css";

type SidebarMenuProps = { isOpen: boolean };

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen }) => {
    return (
        <div className={`${SidebarMenuContainer} ${isOpen ? "open" : ""}`}>
            <section>
                <h2 className="text-xs text-[#828282] border-b-[1px] border-solid border-[#828282] pb-6">
                    NAVIGATION
                </h2>
                <ul className="flex flex-col list-none gap-4 py-6">
                    <li className="text-5xl">Home</li>
                    <li className="text-5xl">About</li>
                    <li className="text-5xl">Contact</li>
                </ul>
            </section>
            <section className="social">
                <h2 className="text-xs text-[#828282] border-t-[1px] border-solid border-[#828282] py-6">
                    SOCIALS
                </h2>
                <ul className="flex justify-between">
                    <li className="text-s font-light">LinkedIn</li>
                    <li className="text-s font-light">Github</li>
                    <li className="text-s font-light">Mail</li>
                </ul>
            </section>
        </div>
    );
};

export default SidebarMenu;
