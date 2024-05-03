import React from "react";
import like from "../public/like.svg";
import DisLike from "../public/dislike.svg";
import Points from "../public/points.svg";

const Otziv = () => {
  return (
    <div>
      <div className="bg-white h-[856px] w-[1160px]  border border-gray-400 ">
        <div className="mx-6 mt-5 flex gap-[546px] items-center border border-gray-300 rounded-t-xl">
          <span className="font-semibold px-8 text-gray-500">Название</span>
          <div className="flex gap-[100px]">
            <span className="font-semibold text-gray-500  bg-white p-5 text-center">
              Тип
            </span>
            <span className="font-semibold text-gray-500 bg-white p-5">
              Статус
            </span>
          </div>
        </div>
        <div className="mx-6 flex gap-[505px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">😉</span> Курьер молодец
          </span>
          <div className="flex gap-[100px]">
            <img src={like} alt="Like icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[495px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">⚡️</span> Быстрая доставка
          </span>
          <div className="flex gap-[100px]">
            <img src={like} alt="Like icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[540px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">😋</span> Вкусная еда
          </span>
          <div className="flex gap-[100px]">
            <img src={like} alt="Like icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[347px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">🤝</span>Оператор был вежлив и дружелюбен
          </span>
          <div className="flex gap-[100px]">
            <img src={DisLike} alt="DisLike icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[506px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">🐌</span> Долгая доставка
          </span>
          <div className="flex gap-[100px]">
            <img src={DisLike} alt="DisLike icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[524px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">🙁</span> Остывшая еда
          </span>
          <div className="flex gap-[100px]">
            <img src={DisLike} alt="DisLike icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[445px] items-center border  border-gray-300 rounded-b-xl ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">🙁</span> Проблемы с оператором
          </span>
          <div className="flex gap-[100px]">
            <img src={DisLike} alt="DisLike icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Otziv;
