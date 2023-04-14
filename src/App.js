import Balances from "./components/Balance/Balances";
import AmountRate from "./components/MoveMoney/AmountRate";
import DashboardNav from "./components/NavBar/DashboardNav";
import FlowNav from "./components/NavBar/FlowNav";
import Rate from "./components/Rates/Rate";
import Transactions from "./components/Transaction/Transactions";




function App() {
  return (
    <div className="App">
      {/* <Tooltip 
     text="This is tooltip"
    //  supportingText='Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'
     className='absolute top-5 left-2'
     position={'top-right'}
     /> */}


{/* Dashboard */}
      {/* 
     <DashboardNav/>
     <Balances/>
     <Transactions/>
     <Rate/>
      */}

      {/* Move money */}
      <FlowNav />
      <AmountRate/>
    </div>
  );
}

export default App;
