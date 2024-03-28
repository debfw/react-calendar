"use client";
import { useState } from "react";
import { data } from "./asset/data";

export default function Home() {
  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");

  const handleSelectDate = (date: string) => {
    if (firstDate === "") {
      setFirstDate(date);
    } else if (secondDate === "") {
      setSecondDate(date);
    } else {
      setFirstDate(date);
      setSecondDate("");
    }
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <table className="w-[350px] h-[240px] text-base">
        <div className="absolute w-[350px] justify-between flex">
          <button className="w-11 h-11 hover:bg-gray-200"> ＜</button>{" "}
          <button className="w-11 h-11 hover:bg-gray-200">＞</button>
        </div>
        <tr className="w-[350px] h-[44px] mb-[16] justify-center flex">
          <th>2022年7月</th>
        </tr>
        <tr>
          {data.map((date, index) => {
            let selectedDate = date === firstDate || date === secondDate;
            return (
              <button
                key={index}
                className={`w-11 h-11 ${
                  selectedDate ? "bg-blue-600" : "bg-white"
                } hover:bg-gray-200`}
                onClick={() => handleSelectDate(date)}
              >
                <th>{date}</th>
              </button>
            );
          })}
        </tr>
      </table>
    </main>
  );
}
