import { Navbar } from "./components";

const App: React.FC<NonNullable<unknown>> = () => {
    return (
        <div className="relative z-0 bg-primary bg-slate-500">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
            </div>
        </div>
    );
};

export default App;
