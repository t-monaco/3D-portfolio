import * as Styled from "./SidebarMenu.styled";

type SidebarMenuProps = { isOpen: boolean };

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen }) => {
    return (
        <Styled.SidebarMenuContainer className={`${isOpen ? "open" : ""}`}>
            <section>
                <h2 className="text-xs text-[#828282] border-b-[1px] border-solid border-[#828282] pb-6">
                    NAVIGATION
                </h2>
                <ul className="flex flex-col list-none gap-4 md:gap-6 py-6 md:py-10">
                    <Styled.SidebarListItem
                        className={`text-5xl md:text-6xl md:font-light cursor-pointer`}
                    >
                        Home
                    </Styled.SidebarListItem>
                    <Styled.SidebarListItem
                        className={`text-5xl md:text-6xl md:font-light cursor-pointer`}
                    >
                        About
                    </Styled.SidebarListItem>
                    <Styled.SidebarListItem
                        className={`text-5xl md:text-6xl md:font-light cursor-pointer`}
                    >
                        Contact
                    </Styled.SidebarListItem>
                </ul>
            </section>
            <section className="social">
                <h2 className="text-xs text-[#828282] border-t-[1px] border-solid border-[#828282] py-6">
                    SOCIALS
                </h2>
                <ul className="flex justify-between">
                    <li className="text-sm md:text-lg font-light">
                        <Styled.SocialLink href="">LinkedIn</Styled.SocialLink>
                    </li>
                    <li className="text-sm md:text-lg font-light">
                        <Styled.SocialLink href="">Github</Styled.SocialLink>
                    </li>
                    <li className="text-sm md:text-lg font-light">
                        <Styled.SocialLink href="">Mail</Styled.SocialLink>
                    </li>
                </ul>
            </section>
        </Styled.SidebarMenuContainer>
    );
};

export default SidebarMenu;
