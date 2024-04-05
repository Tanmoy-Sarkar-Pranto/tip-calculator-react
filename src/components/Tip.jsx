import React from "react"
import "./InputField.css"
import { useState } from "react"

const Tip = ({ tip, setTip, reset, selectedTip, setSelectedTip }) => {
  const tipPercent = [5, 10, 15, 25, 50, "custom"]

  return (
    <section className="flex flex-col mt-4">
      <h2 className="text-slate-400 text-xs mb-4">Select Tip %</h2>
      <div className="flex gap-x-3 gap-y-3 flex-wrap ">
        {tipPercent.map((t, index) => {
          if (t != "custom") {
            return (
              <button
                className={`w-[45%] md:w-[30%] h-[2rem] rounded-md text-white flex justify-center items-center ${
                  selectedTip === t && !reset
                    ? "bg-slate-400 text-emerald-900"
                    : "bg-emerald-900 text-white"
                } hover:bg-slate-400 outline-none focus:bg-slate-400 hover:text-emerald-900 focus:text-emerald-900`}
                key={index}
                onClick={() => {
                  setSelectedTip(t)
                  setTip(t)
                }}
              >
                <p>{t}%</p>
              </button>
            )
          } else {
            return (
              <input
                outline-none
                key={index}
                type="number"
                onClick={() => {
                  setSelectedTip("input")
                }}
                // value={tip}
                onChange={(e) => {
                  const inputValue = parseInt(e.target.value)
                  if (!isNaN(inputValue) && inputValue >= 0) {
                    // Only update tip if input is a non-negative number
                    setTip(inputValue)
                  }
                }}
                onBlur={(e) => {
                  const inputValue = parseInt(e.target.value)
                  if (inputValue < 0) {
                    // Clear input value if it's negative
                    e.target.value = ""
                    setTip("") // Clear tip state as well
                  }
                }}
                min={0}
                className=" w-[45%] md:w-[30%] h-[2rem] text-right px-2 py-2 capitalize text-emerald-900"
                placeholder="custom"
              />
            )
          }
        })}
      </div>
    </section>
  )
}

export default Tip
