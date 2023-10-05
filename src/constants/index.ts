import {
    docker,
    git,
    graphql,
    mongodb,
    nodejs,
    numpy,
    pandas,
    psql,
    python,
    reactjs,
    redis,
    redux,
    sass,
    tailwind,
    tensorflow,
    typescript,
    vitejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

// const services = [
//     {
//         title: "Web Developer",
//         icon: web,
//     },
//     {
//         title: "React Native Developer",
//         icon: mobile,
//     },
//     {
//         title: "Backend Developer",
//         icon: backend,
//     },
//     {
//         title: "Content Creator",
//         icon: creator,
//     },
// ];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Tensorflow",
        icon: tensorflow,
    },
    {
        name: "Pandas",
        icon: pandas,
    },
    {
        name: "Numpy",
        icon: numpy,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Vite JS",
        icon: vitejs,
    },
    {
        name: "Sass",
        icon: sass,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Postgresql",
        icon: psql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "Graphql",
        icon: graphql,
    },
    // {
    //     name: "Docker",
    //     icon: docker,
    // },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export { experiences, technologies };
