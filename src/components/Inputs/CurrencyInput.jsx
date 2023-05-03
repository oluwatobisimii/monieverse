import React from 'react'

const CurrencyInput = ({num, setNum}) => {

    
    

    const formatNumber = (numb) =>{
        if(numb.length === 1){
            setNum((numb/100).toFixed(2))
        }
        else if(numb < num) {
            setNum((numb / 10).toFixed(2))
        }
        else(setNum((numb * 10).toFixed(2)))
    }
// eslint-disable-next-line
    const moveToLast = (e)=>{
        const end = e.target.value.length;
        e.target.setSelectionRange(end, end);
        e.target.focus();
    }

  return (
    <input 
    type="number" 
    step={0.01}
    min={0}
    value={num}
    className="text-d-xs lg:text-d-sm font-clashGrotesk font-medium text-gray-400 focus:outline-none placeholder:text-gray-400"
    onChange={(e)=>{
        formatNumber(e.target.value)
    }}
    // onFocus={(e)=>{
    //     moveToLast(e)
    // }}
    />
  )
}

export default CurrencyInput