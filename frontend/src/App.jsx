import './App.css'
import InvestmentCalculator from './components/calculators/sip'
import Selection from './components/practical/selectOption'
import CreditScoreMeter from './components/practical/creditScore'
function App() {

  return (
    <>
     <InvestmentCalculator/>
     <CreditScoreMeter score={720}/>
    </>
  )
}

export default App
