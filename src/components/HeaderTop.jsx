import React from "react";

const HeaderTop = ({title, update}) => {
    return (
        <div className="flex justify-between bg-white items-center px-5 w-full border-b-[2px] ">
            <h1 className="text-[#5B6871] text-[18px] font-semibold py-5 ">
                {title}
            </h1>

            <div className="flex" >
                <div className={`border-l h-[68px] cursor-pointer px-5 ${update} `} >
                    <span className=" h-full flex items-center gap-4 ">
                    <i className="fa-solid fa-rotate-right font-extrabold text-[--primary] "></i>
                        <span className="text-[14px] font-medium text-[--primary] ">
                        Обновить Telegram
                        </span>
                    </span>
                </div>

                <div className="border-l h-[68px] cursor-pointer pl-5 ">
                    <span className=" h-full flex items-center gap-4 ">
                        <i className="fa-solid fa-plus  font-extrabold text-[#1AC19D] "></i>
                        <span className="text-[14px] font-medium text-[#1AC19D]">
                            Добавить
                        </span>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default HeaderTop;
