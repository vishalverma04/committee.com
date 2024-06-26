import React, { useState } from "react";

function InvestmentCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(25000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [period,setPeriod]=useState('Monthly')
  
  const totalInvestments={
    "Monthly":12,
    "Quaterly":4,
    "Half-Yearly":2,
    "Yearly":1
  }
  const calculateInvestment = (x) => {
    const p=totalInvestment
    const r=expectedReturnRate/(x*100)
    const n=timePeriod*x
    const totalValue= p * ((Math.pow(1+r,n) - 1) / r) * (1 + r)
    const investedAmount=p*n
    const estReturns = totalValue - investedAmount;
    return { investedAmount, estReturns, totalValue };
  };
  const { investedAmount, estReturns, totalValue } = calculateInvestment(parseInt(totalInvestments[period]));
  let scoreWidth=(estReturns*100)/totalValue
  return (
    <>
    <div className="flex">
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className=" flex justify-evenly calculator-header bg-gray-100 p-4 rounded">
        <div className="calculator-title text-lg font-bold">
          SIP Calculator
        </div>
        <div className="calculator-title text-sm font-bold border-none">
     <select className="p-4 rounded-xl outline-none"
      value={period}
      onChange={(e)=> setPeriod(e.target.value)}
     >
        <option
           value="Monthly"
        >
        Monthly
        </option>
        <option 
       value="Quaterly"
        >
        Quaterly
        </option>
        <option 
        value="Half-Yearly"
        >
        Half-Yearly
        </option>
        <option 
        value="Yearly"
        >
        Yearly
        </option>
     </select>
        </div>
      </div>
      <div className="calculator-body p-4">
      
        <div className="calculator-input flex flex-wrap mb-4">
          <label
            htmlFor="totalInvestment"
            className="w-full md:w-1/2 pr-4 mb-2 md:mb-0"
          >
            {period} Investment
          </label>
          <div className="w-full md:w-1/2 pl-4">
            <input
              type="range"
              id="totalInvestment"
              min="1000"
              max="100000"
              step="500"
              value={totalInvestment}
              onChange={(e) => setTotalInvestment(parseInt(e.target.value))}
              className="w-full h-6 pl-2 pr-2 bg-gray-200 rounded"
            />
            <div className="text-sm text-gray-600">
            {/* <input
              type="Number"
              id="totalInvestment"
              min="1000"
              max="100000"
              value={totalInvestment}
              onChange={(e) => setTotalInvestment(parseInt(e.target.value))}
              className="w-full h-6 pl-2 pr-2 bg-gray-200 rounded"
            /> */}
             <div className="text-sm text-gray-600">
              ₹ {totalInvestment}
            </div>
            </div>
          </div>
        </div>
        <div className="calculator-input flex flex-wrap mb-4">
          <label
            htmlFor="expectedReturnRate"
            className="w-full md:w-1/2 pr-4 mb-2 md:mb-0"
          >
            Expected return rate (p.a)
          </label>
          <div className="w-full md:w-1/2 pl-4">
            <input
              type="range"
              id="expectedReturnRate"
              min="1"
              max="50"
              step="1"
              value={expectedReturnRate}
              onChange={(e) =>
                setExpectedReturnRate(parseInt(e.target.value))
              }
              className="w-full h-6 pl-2 pr-2 bg-gray-200 rounded"
            />
            <div className="text-sm text-gray-600">
              {expectedReturnRate}%
            </div>
          </div>
        </div>
        <div className="calculator-input flex flex-wrap mb-4">
          <label
            htmlFor="timePeriod"
            className="w-full md:w-1/2 pr-4 mb-2 md:mb-0"
          >
            Time period
          </label>
          <div className="w-full md:w-1/2 pl-4">
            <input
              type="range"
              id="timePeriod"
              min="1"
              max="50"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(parseInt(e.target.value))}
              className="w-full h-6 pl-2 pr-2 bg-gray-200 rounded"
            />
            <div className="text-sm text-gray-600">
              {timePeriod}Yr
            </div>
          </div>
        </div>
      </div>
      <div className="calculator-results p-4">
        <div className="calculator-results-chart mb-4">
          {/* ... your chart code ... */}
          <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <div className="w-full bg-gray-300 h-10 rounded-full overflow-hidden ">
        <div className={`bg-green-500 h-full text-center text-white`} style={{ width: `${scoreWidth}%` }}>
        </div>
      </div>
      <div className="mt-2 text-sm w-full flex justify-evenly">
        <div className="">Est. returns <span className="text-green-500 bg-green-500 rounded ">abcd</span></div>
        <div className="">Invested amount <span className="text-gray-300 bg-gray-300 rounded ">abcd</span></div>
      </div>
    </div>

        </div>
        <div className="calculator-results-summary">
          <div className="calculator-results-item flex justify-between mb-2">
            <label>Invested amount</label>
            <div>₹{investedAmount.toFixed(0)}</div>
          </div>
          <div className="calculator-results-item flex justify-between mb-2">
            <label>Est. returns</label>
            <div>₹{estReturns.toFixed(0)}</div>
          </div>
          <div className="calculator-results-item flex justify-between mb-2">
            <label>Total value</label>
            <div>₹{totalValue.toFixed(0)}</div>
          </div>
        </div>
        <button
          className="calculator-results-button bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          INVEST NOW
        </button>
      </div>
    </div>
    <div className="otherLinks">
      <h1>other links</h1>
    </div>
    </div>
    </>
  )
}

export default InvestmentCalculator
