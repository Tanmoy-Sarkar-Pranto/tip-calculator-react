import React from "react"

const FinalAmount = ({ tipAmount, total, onReset }) => {
  return (
    <div className="flex flex-col gap-y-4 px-4 pt-6 w-[100%]">
      <div className="flex justify-between">
        <div className="flex flex-col text-white">
          <p className="text-xs md:text-xl">Tip Amount</p>
          <p className="text-[10px] text-teal-500 md:text-sm">/ person</p>
        </div>
        <div className="text-teal-500 text-xl md:text-2xl">${tipAmount}</div>
      </div>
      <div className="flex justify-between items-center md:mt-7">
        <div className="flex flex-col text-white">
          <p className="text-xs md:text-xl">Total</p>
          <p className="text-[10px] text-teal-500 md:text-sm">/ person</p>
        </div>
        <div className="text-teal-500 text-xl md:text-2xl">${total}</div>
      </div>

      <button
        className="w-[100%] h-[2.5rem] bg-teal-500 rounded-sm flex justify-center items-center outline-none hover:bg-slate-300 focus:bg-slate-300 md:mt-11"
        onClick={() => onReset()}
      >
        <p className="text-emerald-900 font-bold uppercase">reset</p>
      </button>
    </div>
  )
}

export default FinalAmount
