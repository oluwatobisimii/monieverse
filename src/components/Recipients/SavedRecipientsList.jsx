import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, {useState} from "react";
import RecipientsTable from "./RecipientsTable";
import AddRecipientPop from "./AddRecipientPop";

const SavedRecipientsList = () => {
  const [addRecipientsPop, setAddRecipientsPop] = useState(false);
  const toggleRecipientsPop = () => {
    setAddRecipientsPop(!addRecipientsPop);
  };
  return (
    <>
     {/* Overlays */}
     {addRecipientsPop && (
        <AddRecipientPop
          isOpen={addRecipientsPop}
          onClose={toggleRecipientsPop}
        />
      )}
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-6 lg:py-10">
        <div className="flex justify-between items-center">
          <p className="text-d-xs font-medium font-clashGrotesk text-gray-600 ">
            Saved Recipients
          </p>
          <div>
            <p className="text-sm text-gray-400">
              Displaying{" "}
              <span className="text-sm font-medium text-gray-500">21</span>{" "}
              recipients{" "}
            </p>
          </div>
        </div>
        <div className="h-8" />
        <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
          <div className="flex lg:flex-row flex-col gap-4 justify-between">
            <div className="focus-within:border-primary-400 border border-gray-100 flex items-center py-3 pl-4 pr-3  rounded-lg gap-2 max-w-[505px] flex-1">
              <MagnifyingGlassIcon className="h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search recipient names"
                className="focus:outline-none placeholder:text-md placeholder:text-gray-400 flex-1"
              />
            </div>
            <button className="flex center px-5 py-3 bg-gray-50 hover:bg-gray-100 gap-2 rounded-lg"
            onClick={()=>{
              setAddRecipientsPop(true)
            }}
            >
              <p className="text-md font-medium text-gray-600">
                Add New Recipient
              </p>
              <PlusIcon className="h-5 text-gray-600" />
            </button>
          </div>
          


          <div className="h-6"/>
          <RecipientsTable/>
        </div>
      </div>
    </section>
    </>
  );
};

export default SavedRecipientsList;
