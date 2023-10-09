import emailjs from "@emailjs/browser";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { PacmanLoader } from "react-spinners";
import { BasicButton, BasicInput, BasicTextarea, Blob, Reveal } from "..";
import { default as Waves } from "../../assets/waves-contact.svg";
import { blobPath1, blobPath2 } from "./Contact.styled";

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
        <div id="contact" className="my-section">
            <Toaster />
            <img
                src={Waves}
                alt="waves"
                className="block absolute  inset-0 -z-10"
            />
            <div className="common-content max-w-[800px]">
                <div className="flex flex-col gap-5 items-center">
                    <Reveal>
                        <h3 className="text-5xl text-center font-semibold">
                            Send me a message!
                        </h3>
                    </Reveal>

                    <Reveal>
                        <p className="text-xl text-center md:w-3/4 mx-auto">
                            Got a question or proposal, or just want to say
                            hello? Go ahead.
                        </p>
                    </Reveal>
                </div>
                <Reveal>
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
                                placeholder="Your work is seriously impressive! I've got my eye on your skills, and I'm thinking it's time to join forces. Let's talk."
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
                </Reveal>

                {errors && (
                    <div className="errors-list">
                        <ul className="list-none text-[var(--purple-001)] font-medium text-sm">
                            {Object.values(errors).map((e, key) => {
                                return (
                                    <li key={key} className="">
                                        {e.message}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
            <Blob from_path={blobPath1} to_path={blobPath2} color="#363b6c" />
        </div>
    );
};

export default Contact;
