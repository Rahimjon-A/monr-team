import React from "react";

const HeaderBot = ({hidden}) => {
    return (
        <div className={`bg-[#f8f9fb] px-5 py-3 h-[56px]  border-b-[2px] flex items-center ${hidden ? "justify-end" : "justify-between"}`}>
            
                <label className={` ${hidden} max-w-[355px] border bg-white flex text-[grey] h-[32px] items-center rounded-md overflow-hidden gap-2 px-2 py-1 `} >
                    <i className="fa-solid fa-magnifying-glass text-[18px] "></i>
                    <input className="h-full grow outline-none" type="text" placeholder="Поиск..." />
                </label>

                
                    <ul className="flex items-center gap-[28px]  " >
                        <li className="flex cursor-pointer hover:opacity-70 transition-all gap-4 items-center text-[--dark-grey] " >
                        <i className="fa-solid fa-table-columns"></i>
                            <span>Столбцы</span>
                        </li>
                        <li className="flex cursor-pointer hover:opacity-70 transition-all gap-4 items-center text-[--dark-grey] " >
                        <i className="fa-solid fa-filter"></i>
                            <span>Фильтр</span>
                        </li>
                        <li className="flex cursor-pointer hover:opacity-70 transition-all gap-4 items-center text-[--dark-grey] " >
                        <i className="fa-solid fa-download "></i>
                            <span>Скачать</span>
                        </li>
                    </ul>
                
            
        </div>
    );
};

export default HeaderBot;
