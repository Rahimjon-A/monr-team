import Sidebar from "../Container/Sidebar";
import Header from "../Container/Header";
import Aktsiya from "./Aktsiya";

const Aktsiyalar = ({ expand, Expander }) => {
    return (
        <div className="flex min-h-[100vh] ">
            <Sidebar expand={expand} Expander={Expander} />

            <div className="w-full">
                <div className="sticky top-0">
                    <Header title="Список акций" />
                </div>

                <div className=" m-5 rounded-lg bg-white ">
                    <Aktsiya/>
                    
                </div>
            </div>
        </div>
    );
};

export default Aktsiyalar;
