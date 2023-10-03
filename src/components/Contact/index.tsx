import { SubmitHandler, useForm } from "react-hook-form";
import { BasicButton, BasicInput, BasicTextarea } from "..";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { default as Waves } from "../../assets/waves-contact.svg";
import { motion } from "framer-motion";

type ContactProps = object;

type FormInput = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC<ContactProps> = () => {
    const [sendingEmail, setSendingEmail] = useState(false);

    const blob1 =
        "M99.2 -157.8C123.7 -157.7 135.5 -121.3 166.8 -89C198.1 -56.7 249.1 -28.3 252.3 1.8C255.4 32 210.9 64 168.3 76.8C125.7 89.7 85.1 83.4 57.4 79.9C29.7 76.4 14.8 75.7 -9.2 91.6C-33.2 107.5 -66.3 139.9 -108.6 151.8C-150.9 163.7 -202.3 155.1 -211.6 126.4C-220.8 97.7 -187.9 48.8 -184.5 2C-181 -44.8 -207 -89.7 -200.4 -123C-193.8 -156.4 -154.7 -178.2 -115.8 -170.1C-77 -162 -38.5 -124 -0.6 -123C37.3 -122 74.7 -158 99.2 -157.8";

    const blob2 =
        "M105.9 -176.1C125.8 -172 122.7 -120.5 149.2 -83.2C175.7 -46 231.8 -23 255.2 13.5C278.6 50 269.2 100 241 134.4C212.9 168.7 165.9 187.4 122.6 208.4C79.3 229.4 39.7 252.7 -0.2 253C-40 253.3 -80 230.6 -108.9 201.2C-137.7 171.9 -155.5 135.9 -151.3 101.3C-147.1 66.7 -121.1 33.3 -111.5 5.5C-102 -22.3 -109 -44.7 -99.4 -55.5C-89.9 -66.3 -63.7 -65.6 -44.3 -70.1C-25 -74.6 -12.5 -84.3 15.2 -110.7C43 -137.1 86 -180.3 105.9 -176.1";

    const blobV = {
        blob1: {
            fill: "#363b6c",
            d: blob1,
        },
        blob2: {
            d: blob2,
            fill: "#363b6c",
        },
    };

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
            <svg
                id="visual"
                overflow="visible"
                className="absolute md:bottom-[2rem] md:left-[14rem] -z-10"
            >
                <motion.path
                    variants={blobV}
                    initial="blob1"
                    animate="blob2"
                    // animate="blob2"
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        repeatType: "reverse",
                    }}
                />
            </svg>
        </div>
    );
};

export default Contact;
