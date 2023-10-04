import { TextareaHTMLAttributes } from "react";
import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";
import * as Styled from "./BasicTextarea.styled";

type BasicTextareaProps<TFormValues extends FieldValues> =
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
        register: UseFormRegister<TFormValues>;
        fieldName: Path<TFormValues>;
        label: string;
        validation?: RegisterOptions;
        errorsKeys: string[] | undefined;
    };

const BasicTextarea = <TFormValues extends FieldValues>({
    fieldName,
    register,
    label,
    validation,
    errorsKeys,
    ...restTextareaProps
}: BasicTextareaProps<TFormValues>) => {
    return (
        <Styled.FormFieldContainer
            className={`${
                errorsKeys && errorsKeys.includes(fieldName) ? "error" : ""
            }`}
        >
            <label htmlFor="message">{label}</label>
            <textarea
                {...register(fieldName, validation)}
                {...restTextareaProps}
            />
        </Styled.FormFieldContainer>
    );
};

export default BasicTextarea;
