import { SubmitHandler, useForm } from "react-hook-form";
import { BasicButton, BasicInput, BasicTextarea } from "..";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";

type ContactProps = object;

type FormInput = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC<ContactProps> = () => {
    const [sendingEmail, setSendingEmail] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormInput>();

    // TODO: Style inputs with errors
    // TODO: Move send to a hook

    const onSubmit: SubmitHandler<FormInput> = ({ name, message, email }) => {
        setSendingEmail(true);
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: name,
                    to_name: "Tomas",
                    from_email: email,
                    message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    toast.success("Email sent successfully!");
                    setSendingEmail(false);
                    reset();
                },
                () => {
                    toast.error("Something went wrong...");
                    setSendingEmail(false);
                }
            );
    };

    return (
        <div className="my-section text-black my-section">
            <Toaster />
            <div className="common-content">
                <div className="flex flex-col gap-5 items-center">
                    <h3 className="text-5xl text-center font-semibold">
                        Send me a message!
                    </h3>
                    <p className="text-xl text-center w-3/4">
                        Got a question or proposal, or just want to say hello?
                        Go ahead.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col items-center gap-[3rem]"
                >
                    <div className="w-full flex flex-wrap justify-between gap-4">
                        <BasicInput
                            register={register}
                            validation={{
                                required: "Please provide your name.",
                                maxLength: {
                                    value: 50,
                                    message:
                                        "Name should not exceed 50 characters",
                                },
                            }}
                            fieldName="name"
                            label="Your name"
                            placeholder="Enter your name"
                            errorsKeys={Object.keys(errors)}
                        />
                        <BasicInput
                            register={register}
                            validation={{
                                required: "Please provide your email.",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                                    message: "Please provide a valid email",
                                },
                            }}
                            fieldName="email"
                            label="Email Address"
                            placeholder="Enter email address"
                            type="email"
                            errorsKeys={Object.keys(errors)}
                        />
                        <BasicTextarea
                            register={register}
                            validation={{
                                required: "Please provide a message.",
                            }}
                            label="Your Message"
                            fieldName="message"
                            placeholder="TODO: Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                            errorsKeys={Object.keys(errors)}
                        />
                    </div>

                    <BasicButton type="submit">
                        {sendingEmail ? (
                            <div className="flex w-full justify-center">
                                <PacmanLoader color="#000000" size={12} />
                            </div>
                        ) : (
                            "SHOOT BRO"
                        )}
                    </BasicButton>
                </form>
                {errors && (
                    <div className="errors-list">
                        <ul className="list-none text-red-600 font-medium text-sm">
                            {Object.values(errors).map((e, k) => {
                                return (
                                    <li key={k} className="">
                                        {e.message}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
