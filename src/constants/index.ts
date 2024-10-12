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
    readytech,
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
        title: "Software Engineer",
        company_name: "ReadyTech",
        icon: readytech,
        iconBg: "#e9e9e9",

        date: "2024 - Present",
        points: [
            "Actively involved in the design and development of innovative features for education technology products, collaborating closely with cross-functional teams, including technical leads, product managers, and product designers.",
            "Spearheaded the development of a new user interface using the Next.js tech stack, focusing on delivering an exceptional user experience (UX) that aligns with the latest industry standards.",
            "Conducted comprehensive code reviews to ensure codebase consistency, adherence to company standards, and alignment with best practices. Provided constructive feedback on pull requests, contributing to continuous team improvement and knowledge sharing.",
        ],
        keyFeatures: [
            "Next.js: Leveraged the robust capabilities of Next.js and React to build dynamic, high-performance web applications.",
            "TypeScript: Utilized TypeScript for its strong typing and improved tooling, enabling scalable and maintainable codebases.",
            "Figma: Collaborated on design and workflow visualization using Figma, ensuring seamless communication and alignment across the team.",
            "Material UI (MUI): Implemented standardized UI components with Material UI, facilitating a consistent and cohesive design language across all products.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Besrker Program (FEX)",
        icon: freelancing,
        iconBg: "#727272",

        date: "2023 - 2024",
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
        keyFeatures: [
            "Writing, testing, and maintaining program code to meet system requirements, system designs, and technical specifications, ensuring adherence to accredited quality standards.",
            "Researching, consulting, and analysing system programs needs to ensure alignment with organisational objectives.",
            "Managing the automation of software testing and deployment processes.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Wunderman Thompson (VML)",
        iconBg: "#e9e9e9",

        icon: wt,
        date: "2019 - 2021",
        points: [
            "Developed and maintained both frontend and backend components, handling business logic, data manipulation, and web content management.",
            "Proficient in email marketing and automation for comprehensive web solutions.",
        ],
        keyFeatures: [
            "Developing and maintaining program code in accordance with system requirements, design specifications, and technical standards, while ensuring compliance with recognized quality standards.",
            "Creating, updating, and maintaining technical documentation, end-user guides, and operational procedures to ensure seamless integration and usability of software systems.",
            "Developing and implementing tools to support software development, management, and optimisation, enhancing operational efficiency.",
        ],
    },
    {
        title: "Programmer & Analyst",
        company_name: "Police of Buenos Aires",
        iconBg: "#e9e9e9",
        icon: ba,
        date: "2017 - 2019",
        points: [
            "Managed payroll data analysis, reporting, and discrepancy resolution in collaboration with cross-functional teams.",
            "Identified process improvement opportunities, ensuring data integrity and confidentiality.",
        ],
        keyFeatures: [
            "Gathering, cleaning, and interpreting data using advanced IT tools, automating manual processes through tailored scripts and spreadsheets, and presenting results through interactive visualisations (graphs, charts, dashboards). This significantly improved team productivity, operational monitoring, and decision-making.",
            "Programming, testing, and maintaining software programs to streamline operations, automate complex tasks, and enhance business process efficiency and accuracy.",
            "Conducting in-depth analysis, producing requirements documentation, and developing system plans for business-critical applications.",
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
