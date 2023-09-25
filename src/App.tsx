import { About, Main, Navbar } from "./components";

const App: React.FC<NonNullable<unknown>> = () => {
    return (
        <div className="relative z-0 bg-white min-h-screen overflow-hidden">
            <div className=" bg-cover bg-no-repeat bg-center relative">
                <Navbar />
                <Main />
                <About />
            </div>
        </div>
    );
};

export default App;
