import { About, Contact, Experience, Main, Navbar } from "./components";

const App: React.FC<NonNullable<unknown>> = () => {
    return (
        <div className="relative z-0 bg-[#242431] overflow-hidden">
            <div className=" bg-cover bg-no-repeat bg-center relative">
                <Navbar />
                <Main />
                <About />
                <Experience />
                <Contact />
            </div>
        </div>
    );
};

export default App;
