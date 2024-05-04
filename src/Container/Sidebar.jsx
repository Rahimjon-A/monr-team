import React from "react";
import PageSide from "../components/PageSide";
import SectionSide from "../components/SectionSide";

const Sidebar = ({ expand, Expander }) => {
    return (
        <nav
            className={`  ${
                expand ? "max-w-[280px]" : "max-w-[150px]"
            }  w-full min-h-[100vh] h-full bg-white  flex`}
        >
           <div className="flex fixed top-0 " >
           <PageSide />
            <SectionSide expand={expand} Expander={Expander} />
           </div>
        </nav>
    );
};

export default Sidebar;
