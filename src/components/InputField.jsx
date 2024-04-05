import React, { useState } from "react"
import "./InputField.css"

const InputField = ({ text, icon, item, setItem }) => {
  const [isFocused, setIsFocused] = useState(null)
  return (
    <section className="first:mt-0 last:mt-6 mr-4">
      <form>
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor={text} className="text-xs text-slate-400">
              {text}
            </label>
            {item <= 0 && isFocused === false && (
              <p className="text-red-600 text-[8px]">can't be zero</p>
            )}
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
              <img src={icon} alt="dollar" />
            </span>
            <input
              id={text}
              type="number"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              min={0}
              className="pl-10 pr-4 h-10 outline-none focus:border rounded-sm focus:border-slate-400 text-right w-[100%]"
              placeholder="0"
              onSelect={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </div>
      </form>
    </section>
  )
}

export default InputField
