import { TextareaHTMLAttributes } from "react";
import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from "react-hook-form";
import { FormField, FormFieldContainer, FormLabel } from "./BasicTextarea.css";

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
        <div
            className={`${FormFieldContainer} ${
                errorsKeys && errorsKeys.includes(fieldName) ? "error" : ""
            }`}
        >
            <label className={`${FormLabel}`} htmlFor="message">
                {label}
            </label>
            <textarea
                className={`${FormField}`}
                {...register(fieldName, validation)}
                {...restTextareaProps}
            />
        </div>
    );
};

export default BasicTextarea;
