import React from 'react'

const PaymentStatus = ({ status }) => {
  
    return (
      <>
        {status === "processing" && (
          <div className="flex items-center gap-2">
            <div className="p-[1px] rounded-[20px] bg-lightBlue-100 w-6">
              <div className=" bg-lightBlue-500 h-1.5 w-2 rounded-[20px]" />
            </div>
            <p className="text-sm text-gray-500">Processing</p>
          </div>
        )}
  
        {status === "progress" && (
          <div className="flex items-center gap-2">
            <div className="p-[1px] rounded-[20px] bg-primary-200 w-6">
              <div className=" bg-primary-500 h-1.5 w-[14px] rounded-[20px]" />
            </div>
            <p className="text-sm text-gray-500">In-Progress</p>
          </div>
        )}
  
        {status === "failed" && (
          <div className="flex items-center gap-2">
            <div className="p-[1px] rounded-[20px] bg-error-200 w-6">
              <div className=" bg-error-500 h-1.5 w-full rounded-[20px]" />
            </div>
            <p className="text-sm text-gray-500">Failed</p>
          </div>
        )}
  
        {status === "completed" && (
          <div className="flex items-center gap-2">
            <div className="p-[1px] rounded-[20px] bg-green-200 w-6">
              <div className=" bg-green-500 h-1.5 w-full rounded-[20px]" />
            </div>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
        )}
      </>
    );
  };

export default PaymentStatus