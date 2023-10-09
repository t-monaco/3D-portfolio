import { HashLink } from "react-router-hash-link";
import { default as ResumePDF } from "./../../../assets/pdf/resume-tomas_monaco.pdf";
import * as Styled from "./SidebarMenu.styled";

type SidebarMenuProps = { isOpen: boolean; onClick: () => void };

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClick }) => {
    return (
        <Styled.SidebarMenuContainer className={`${isOpen ? "open" : ""}`}>
            <section className="flex flex-col flex-1">
                <h2 className="text-xs text-[#828282] border-b-[1px] border-solid border-[#828282] pb-6">
                    NAVIGATION
                </h2>
                <ul className="flex flex-col list-none gap-4 md:gap-6 py-6 md:py-10 flex-1">
                    <Styled.SidebarListItem>
                        <HashLink
                            className="w-full block"
                            to="#about"
                            onClick={() => onClick()}
                        >
                            About
                        </HashLink>
                    </Styled.SidebarListItem>
                    <Styled.SidebarListItem>
                        <HashLink
                            className="w-full block"
                            to="#experience"
                            onClick={() => onClick()}
                        >
                            Experience
                        </HashLink>
                    </Styled.SidebarListItem>
                    <Styled.SidebarListItem>
                        <HashLink
                            className="w-full block"
                            to="#contact"
                            onClick={() => onClick()}
                        >
                            Contact
                        </HashLink>
                    </Styled.SidebarListItem>
                    <Styled.DownloadLink
                        href={ResumePDF}
                        download="resume-tomas_monaco.pdf"
                        target="_blank"
                    >
                        Download Resume
                    </Styled.DownloadLink>
                </ul>
            </section>
            <section className="social">
                <h2 className="text-xs text-[#828282] border-t-[1px] border-solid border-[#828282] py-6">
                    SOCIALS
                </h2>
                <ul className="flex justify-between">
                    <li>
                        <Styled.SocialLink
                            target="_blank"
                            href="https://www.linkedin.com/in/tamonaco/"
                        >
                            LinkedIn
                        </Styled.SocialLink>
                    </li>
                    <li>
                        <Styled.SocialLink
                            target="_blank"
                            href="https://github.com/t-monaco"
                        >
                            Github
                        </Styled.SocialLink>
                    </li>
                    <li>
                        <Styled.SocialLink
                            target="_blank"
                            href="mailto:monacotomas99@gmail.com"
                        >
                            Mail
                        </Styled.SocialLink>
                    </li>
                </ul>
            </section>
        </Styled.SidebarMenuContainer>
    );
};

export default SidebarMenu;
