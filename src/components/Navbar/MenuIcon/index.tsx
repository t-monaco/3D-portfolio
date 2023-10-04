import * as Styled from "./MenuIcon.styled";

type MenuIconProps = { handleClick: () => void; isOpen: boolean };

const MenuIcon: React.FC<MenuIconProps> = ({ handleClick, isOpen }) => {
    return (
        <Styled.MenuIconContainer
            className={`${isOpen ? "open" : ""}`}
            onClick={() => handleClick()}
        >
            <span id="top"></span>
            <span id="bottom"></span>
        </Styled.MenuIconContainer>
    );
};

export default MenuIcon;
