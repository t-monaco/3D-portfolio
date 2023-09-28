import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { BasicBtn } from "./BasicButton.css";

type BasicButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BasicButton: React.FC<PropsWithChildren<BasicButtonProps>> = ({
    ...btnProps
}) => {
    return (
        <button className={`${BasicBtn}`} {...btnProps}>
            {btnProps.children}
        </button>
    );
};

export default BasicButton;
