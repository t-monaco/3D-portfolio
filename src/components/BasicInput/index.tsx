import { InputHTMLAttributes } from "react";
import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";
import * as Styled from "./BasicInput.styled";

type BasicInputProps<TFormValues extends FieldValues> =
    InputHTMLAttributes<HTMLInputElement> & {
        fieldName: Path<TFormValues>;
        register: UseFormRegister<TFormValues>;
        label: string;
        errorsKeys: string[] | undefined;
        validation?: RegisterOptions;
    };

const BasicInput = <TFormValues extends FieldValues>({
    register,
    fieldName,
    label,
    validation,
    errorsKeys,
    ...restInputProps
}: BasicInputProps<TFormValues>) => {
    return (
        <Styled.FormFieldContainer
            className={`${
                errorsKeys && errorsKeys.includes(fieldName) ? "error" : ""
            }`}
        >
            <label htmlFor={fieldName}>{label}</label>
            <input {...register(fieldName, validation)} {...restInputProps} />
        </Styled.FormFieldContainer>
    );
};

export default BasicInput;
