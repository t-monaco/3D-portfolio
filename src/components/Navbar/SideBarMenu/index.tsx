import { ListItem, SidebarMenuContainer, SocialLink } from "./sidebarMenu.css";

type SidebarMenuProps = { isOpen: boolean };

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen }) => {
    return (
        <div className={`${SidebarMenuContainer} ${isOpen ? "open" : ""}`}>
            <section>
                <h2 className="text-xs text-[#828282] border-b-[1px] border-solid border-[#828282] pb-6">
                    NAVIGATION
                </h2>
                <ul className="flex flex-col list-none gap-4 md:gap-6 py-6 md:py-10">
                    <li
                        className={`text-5xl md:text-6xl md:font-light cursor-pointer ${ListItem}`}
                    >
                        Home
                    </li>
                    <li
                        className={`text-5xl md:text-6xl md:font-light cursor-pointer ${ListItem}`}
                    >
                        About
                    </li>
                    <li
                        className={`text-5xl md:text-6xl md:font-light cursor-pointer ${ListItem}`}
                    >
                        Contact
                    </li>
                </ul>
            </section>
            <section className="social">
                <h2 className="text-xs text-[#828282] border-t-[1px] border-solid border-[#828282] py-6">
                    SOCIALS
                </h2>
                <ul className="flex justify-between">
                    <li className="text-sm md:text-lg font-light">
                        <a className={`${SocialLink}`} href="">
                            LinkedIn
                        </a>
                    </li>
                    <li className="text-sm md:text-lg font-light">
                        <a className={`${SocialLink}`} href="">
                            Github
                        </a>
                    </li>
                    <li className="text-sm md:text-lg font-light">
                        <a className={`${SocialLink}`} href="">
                            Mail
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default SidebarMenu;
