import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as Styled from "./BasicButton.styled";

type BasicButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BasicButton: React.FC<PropsWithChildren<BasicButtonProps>> = ({
    ...btnProps
}) => {
    return <Styled.BasicButton>{btnProps.children}</Styled.BasicButton>;
};

export default BasicButton;
