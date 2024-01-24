import {
    // docker,
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
    medallia,
    freelancing,
    wt,
    ba,
} from "../assets";

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

const about = {
    title: "About Me",
    content: [
        "My journey in the world of tech has equipped me with a diverse set of skills across various programming languages and frameworks. Whether it's unraveling complex challenges or crafting elegant solutions, I thrive on the art of creation.",
        "But what truly sets me apart is my unwavering determination. When I'm involved in a project, I go full throttle, pushing boundaries and embracing challenges with gusto. While I have a deep-rooted love for data-driven projects and a fascination with the ever-evolving landscape of machine learning.",
        "I'm not just seeking opportunities; I'm on the lookout for purpose-driven collaborations that allow both personal and collective growth.",
        "Join me on this exciting adventure where we turn ideas into remarkable digital experiences. Let's make a difference together.",
    ],
};

const experiences = [
    {
        title: "Full-Stack Engineer",
        company_name: "Freelancing (latest project)",
        icon: freelancing,
        iconBg: "#727272",

        date: "2024",
        points: [
            "Introducing Berserker App - the game-changer in Crossfit programming that I've crafted from design to code. 🏋️‍♂️✨",
            "🔥Berserker App is not just a fitness app; it's a NextJS masterpiece, leveraging the latest web development features. As the brainchild behind the design, prototyping, and full-stack development, I've reimagined how coaches submit programming and how athletes conquer their workouts.",
        ],
        keyFeatures: [
            "NextJS Marvel: Experience the power of the latest NextJS features for a lightning-fast, dynamic fitness journey.",
            "Sleek Design: A visually stunning interface that makes engaging with workouts a pleasure.",
            "Secure Authentication: Powered by ClerkJS for robust and stylish user authentication.",
            "Data Backbone: The beating heart of the app relies on Xata, a Serverless database platform backed by PostgreSQL.",
        ],
        footer: "*Take a look at some snapshots on my LinkedIn profile!",
    },
    {
        title: "Software Engineer",
        company_name: "Medallia",
        icon: medallia,
        iconBg: "#e9e9e9",

        date: "2021 - 2023",
        points: [
            "Led UX analysis for diverse client webpages. Spearheaded app redesign, by creating a React component library and the integration with a new API for data-driven components.",
            "Managed deployment pipelines and environments.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Wunderman Thompson",
        iconBg: "#e9e9e9",

        icon: wt,
        date: "2019 - 2021",
        points: [
            "Developed and maintained both frontend and backend components, handling business logic, data manipulation, and web content management.",
            "Proficient in email marketing and automation for comprehensive web solutions.",
        ],
    },
    {
        title: "Data Analyst (Payroll)",
        company_name: "Police of Buenos Aires",
        iconBg: "#e9e9e9",
        icon: ba,
        date: "2017 - 2019",
        points: [
            "Managed payroll data analysis, reporting, and discrepancy resolution in collaboration with cross-functional teams.",
            "Identified process improvement opportunities, ensuring data integrity and confidentiality.",
        ],
    },
];

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

export { about, experiences, technologies };
