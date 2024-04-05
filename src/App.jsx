import React, { useState, useEffect } from "react"
import InputField from "./components/InputField"
import Tip from "./components/Tip"
import dollarIcon from "./assets/images/icon-dollar.svg"
import peopleIcon from "./assets/images/icon-person.svg"
import FinalAmount from "./components/FinalAmount"

const App = () => {
  const [bill, setBill] = useState("")
  const [tip, setTip] = useState("")
  const [people, setPeople] = useState("")
  const [tipAmount, setTipAmount] = useState("0.00")
  const [total, setTotal] = useState("0.00")
  const [reset, setReset] = useState(false)
  const [selectedTip, setSelectedTip] = useState(null)

  const onReset = () => {
    setReset(!reset)
    setBill("")
    setTip("")
    setPeople("")
    setTipAmount("0.00")
    setTotal("0.00")
    setSelectedTip(null)
  }

  useEffect(() => {
    setReset(false)
    if ((people > 0) & (bill > 0)) {
      const tempTip = ((parseFloat(bill) * (tip / 100)) / people).toFixed(2)
      // console.log(typeof tempTip)
      const total = (
        parseFloat(bill) / parseInt(people) +
        parseFloat(tempTip)
      ).toFixed(2)
      setTipAmount(tempTip)
      setTotal(total)
    }
  }, [people, tip, bill])

  return (
    <div className="w-screen min-h-screen bg-slate-300 font-sapceMono font-bold flex flex-col justify-center items-center overflow-hidden">
      <header className="mb-6">
        <h1 className="uppercase tracking-[.5em] w-[5rem] text-emerald-900  break-words">
          splitter
        </h1>
      </header>
      <div className="w-[15rem] h-[80%] flex flex-col md:flex-row md:w-[40rem] overflow-auto bg-white rounded-lg pb-5">
        <div>
          <main className="flex flex-col pt-8 pl-4">
            <InputField
              text="Bill"
              icon={dollarIcon}
              item={bill}
              setItem={setBill}
              setTipAmount={setTipAmount}
              people={people}
            />

            <Tip
              tip={tip}
              setTip={setTip}
              reset={reset}
              selectedTip={selectedTip}
              setSelectedTip={setSelectedTip}
            />
            <InputField
              text="Number of People"
              icon={peopleIcon}
              item={people}
              setItem={setPeople}
              setTipAmount={setTipAmount}
              tip={tip}
              people={people}
            />
          </main>
        </div>
        <footer className="mt-4 flex w-[90%] md:w-[50%] bg-emerald-900 ml-4 mr-0 h-[11rem] md:h-[18rem] rounded-lg md:mr-4">
          <FinalAmount tipAmount={tipAmount} total={total} onReset={onReset} />
        </footer>
      </div>
    </div>
  )
}

export default App
