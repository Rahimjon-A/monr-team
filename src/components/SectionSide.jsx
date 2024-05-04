import { useState } from "react";
import { NavLink } from "react-router-dom";

const SectionSide = ({ expand, Expander }) => {
    const [moreInfo, setMoreInfo] = useState(false);

    const getMoreInfo = () => {
        setMoreInfo(!moreInfo);
    };

    return (
        <div className={` ${expand ? "w-[216px]  p-4" : "p-4 w-[86px]  text-center "} border-r-[2px] h-[100vh] flex flex-col bg-white `}>
            <div className="flex justify-between items-center py-1 mb-[32px] ">
                {expand ? (
                    <p className="text-[--primary] font-extrabold text-[24px]  ">
                        Delever
                    </p>
                ) : null}
                <span
                    onClick={Expander}
                    className="border-[2px] ml-[10px] p-[3px] rounded-lg w-[30px] h-[30px] grid place-content-center "
                >
                    <i className="fa-solid fa-arrow-right-arrow-left w-5 h-5 text-[--grey] text-[20px]  "></i>
                </span>
            </div>

            <ul className=" flex flex-col  mb-4">
                <NavLink to={"/"} className="text-black py-3 px-4 rounded-md ">
                    <li>
                        {expand ? (
                            <span>Акции</span>
                        ) : (
                            <i className="fa-solid fa-ellipsis"></i>
                        )}
                    </li>
                </NavLink>

                <NavLink
                    to={"/banners"}
                    className="text-black py-3 px-4 rounded-md "
                >
                    <li>
                        {expand ? (
                            <span>Баннеры</span>
                        ) : (
                            <i className="fa-solid fa-ellipsis"></i>
                        )}
                    </li>
                </NavLink>

                <NavLink
                    to={"/otzivi"}
                    className="text-black py-3 px-4 rounded-md "
                >
                    <li>
                        {expand ? (
                            <span>Отзывы</span>
                        ) : (
                            <i className="fa-solid fa-ellipsis"></i>
                        )}
                    </li>
                </NavLink>

                <NavLink
                    onClick={getMoreInfo}
                    to={"/rassilka"}
                    className={`text-black py-3 px-4 rounded-md ${moreInfo ? "bg-[--grey]": null } `}
                >
                    <li>
                        {expand ? (
                            <span className="flex items-center justify-between ">
                                <span>Рассылка</span>
                                {moreInfo ? (
                                    <i className="fa-solid fa-chevron-up "></i>
                                ) : (
                                    <i className="fa-solid fa-chevron-down "></i>
                                )}
                            </span>
                        ) : (
                            <i className="fa-solid fa-ellipsis"></i>
                        )}
                    </li>
                </NavLink>

                <ul className={` ${moreInfo ? "visible" : "hidden"}  ${expand ? "visible" : "hidden"} bg-[#6E8BB71A] rounded-md pt-[10px] `}>
                    <li className="py-2 px-4 hover:bg-[--primary] hover:text-white rounded-md " >Телеграм</li>
                    <li className="py-2 px-4 hover:bg-[--primary] hover:text-white rounded-md " >СМС</li>
                    <li className="py-2 px-4 hover:bg-[--primary] hover:text-white rounded-md " >Пуш</li>
                </ul>
            </ul>
        </div>
    );
};

export default SectionSide;
