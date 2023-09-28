import { InputHTMLAttributes } from "react";
import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";
import { FormField, FormFieldContainer, FormLabel } from "./BasicInput.css";

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
        <div
            className={`${FormFieldContainer} ${
                errorsKeys && errorsKeys.includes(fieldName) ? "error" : ""
            }`}
        >
            <label className={`${FormLabel}`} htmlFor={fieldName}>
                {label}
            </label>
            <input
                className={`${FormField}`}
                {...register(fieldName, validation)}
                {...restInputProps}
            />
        </div>
    );
};

export default BasicInput;
