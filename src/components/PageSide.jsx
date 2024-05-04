import { useState } from "react";
import Logo from "../../public/assets/logo.png";
import userImg from "../../public/assets/userImg.png";

const PageSide = () => {
    const [activate, setActivate] = useState(4);

    return (
        <div className=" py-4 min-w-[64px] h-[100vh] bg-white px-3 flex flex-col justify-between border-r">
            <div>
                <div className="mb-[28px]">
                    <img className="w-10 h-10  " src={Logo} alt="logo" />
                </div>

                <ul className="flex flex-col justify-center items-center gap-8  ">
                    <li
                        className=" relative w-full text-center  "
                        onClick={() => setActivate(1)}
                    >
                        <i
                            className={`fa-solid fa-cart-shopping w-5 h-5  ${
                                activate === 1
                                    ? "text-[--primary]"
                                    : "text-[--grey]"
                            }`}
                        ></i>
                        <span
                            className={` ${
                                activate === 1
                                    ? "w-[3px] h-[150%] bg-[--primary] absolute right-[-12px] top-[-6px]"
                                    : null
                            } `}
                        >
                            {" "}
                        </span>
                    </li>

                    <li
                        className=" relative w-full text-center "
                        onClick={() => setActivate(2)}
                    >
                        <i
                            className={`fa-solid fa-user ${
                                activate === 2
                                    ? "text-[--primary]"
                                    : "text-[--grey]"
                            }`}
                        ></i>
                        <span
                            className={` ${
                                activate === 2
                                    ? "w-[3px] h-[150%] bg-[--primary] absolute right-[-12px] top-[-6px]"
                                    : null
                            } `}
                        >
                            {" "}
                        </span>
                    </li>

                    <li
                        className=" relative w-full text-center  "
                        onClick={() => setActivate(3)}
                    >
                        <i
                            className={`fa-solid fa-user-group ${
                                activate === 3
                                    ? "text-[--primary]"
                                    : "text-[--grey]"
                            }`}
                        ></i>
                        <span
                            className={` ${
                                activate === 3
                                    ? "w-[3px] h-[150%] bg-[--primary] absolute right-[-12px] top-[-6px]"
                                    : null
                            } `}
                        >
                            {" "}
                        </span>
                    </li>

                    <li
                        className=" relative w-full text-center  "
                        onClick={() => setActivate(4)}
                    >
                        <i
                            className={`fa-regular fa-circle-dot ${
                                activate === 4
                                    ? "text-[--primary]"
                                    : "text-[--grey]"
                            } `}
                        ></i>
                        <span
                            className={` ${
                                activate === 4
                                    ? "w-[3px] h-[150%] bg-[--primary] absolute right-[-12px] top-[-6px]"
                                    : null
                            } `}
                        >
                            {" "}
                        </span>
                    </li>

                    <li
                        className=" relative w-full text-center  "
                        onClick={() => setActivate(5)}
                    >
                        <i
                            className={`fa-solid fa-book-bookmark ${
                                activate === 5
                                    ? "text-[--primary]"
                                    : "text-[--grey]"
                            }`}
                        ></i>
                        <span
                            className={` ${
                                activate === 5
                                    ? "w-[3px] h-[150%] bg-[--primary] absolute right-[-12px] top-[-6px]"
                                    : null
                            } `}
                        >
                            {" "}
                        </span>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex flex-col justify-center items-center gap-9  ">
                    <li
                        className=" relative w-full text-center  "
                        onClick={() => setActivate(6)}
                    >
                        <i
                            className={`fa-solid fa-bell ${
                                activate === 6
                                    ? "text-[--primary]"
                                    : "text-[--grey]"
                            }`}
                        ></i>
                        <span
                            className={` ${
                                activate === 6
                                    ? "w-[3px] h-[150%] bg-[--primary] absolute right-[-12px] top-[-6px]"
                                    : null
                            } `}
                        >
                            {" "}
                        </span>
                    </li>

                    <li
                        className=" relative w-full text-center  "
                        onClick={() => setActivate(7)}
                    >
                        <i
                            className={`fa-solid fa-gear ${
                                activate === 7
                                    ? "text-[--primary]"
                                    : "text-[--grey]"
                            } `}
                        ></i>
                        <span
                            className={` ${
                                activate === 7
                                    ? "w-[3px] h-[150%] bg-[--primary] absolute right-[-12px] top-[-6px]"
                                    : null
                            } `}
                        >
                            {" "}
                        </span>
                    </li>
                </ul>

                <div className="mt-[30px] ">
                    <img
                        className="w-10 h-10 "
                        src={userImg}
                        alt="user Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default PageSide;
