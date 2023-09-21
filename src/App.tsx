import { Navbar } from "./components";

const App: React.FC<NonNullable<unknown>> = () => {
    return (
        <div className="relative z-0 bg-slate-500 min-h-screen overflow-hidden">
            <div className=" bg-cover bg-no-repeat bg-center relative">
                <Navbar />
                <div className="min-h-screen">ABOUT</div>
                <div className="min-h-screen">CONTACT</div>
            </div>
        </div>
    );
};

export default App;
