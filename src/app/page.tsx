"use client";
import { useState } from "react";
import { data } from "./asset/data";

export default function Home() {
  const [startDateId, setStartDateId] = useState("");
  const [endDateId, setEndDateId] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const todayDateString = `${new Date().getDate()}日`;

  const isSelectedDateId = (id: string) => {
    const startIndex = data.findIndex((date) => date.id === startDateId);
    const endIndex = data.findIndex((date) => date.id === endDateId);
    const currentId = data.findIndex((date) => date.id === id);
    return currentId >= startIndex && currentId <= endIndex;
  };
  const handleSelectDate = (id: string) => {
    if (!startDateId) {
      setStartDateId(id);
    } else if (!endDateId) {
      setEndDateId(id);
      setIsSelected(true);
    } else {
      setStartDateId(id);
      setEndDateId("");
      setIsSelected(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center w-[350px] h-[240px] relative">
        <div className="flex justify-between w-[350px] absolute top-0 ">
          <button className="w-11 h-11 hover:bg-gray-200"> ＜</button>
          <button className="w-11 h-11 hover:bg-gray-200">＞</button>
        </div>
        <div className="text-base mb-4">2022年7月</div>
        <div className="grid grid-cols-7 ">
          {data.map(({ id, name }) => {
            const isInSelectedRange = isSelectedDateId(id);
            const isSelectedStart = id === startDateId;
            const isSelectedEnd = id === endDateId;
            const isToday = name === todayDateString;
            const isNotCurrentMonthDate = ["1", "2", "3", "4"].includes(id);
            return (
              <div
                key={id}
                className={`w-[50px] h-[36px] flex justify-center items-center ${
                  isSelectedStart || isSelectedEnd || isInSelectedRange
                    ? "bg-blue-600"
                    : isToday && !isNotCurrentMonthDate
                    ? "bg-[#ffff76]"
                    : "hover:bg-gray-200"
                } ${
                  isNotCurrentMonthDate
                    ? "text-[#757575] bg-white hover:bg-white"
                    : ""
                }`}
              >
                <button
                  onClick={() => handleSelectDate(id)}
                  className={`${
                    isNotCurrentMonthDate
                      ? "cursor-not-allowed bg-white"
                      : ""
                  }`}
                >
                  {name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
