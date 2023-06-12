import fileUpload from "../../assets/icons/UploadFile.svg";
import fileUploaded from "../../assets/icons/FileUploaded.svg";
import paperClip from "../../assets/icons/Paperclip.svg";
import deleteFile from "../../assets/icons/Trash-red.svg";

const FileUploader = ({ selectedFile, setSelectedFile, id }) => {
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const sizeFormat = (byte) => {
    if (byte < 1024 * 1024) {
      return `${(byte / 1024).toFixed(2)}KB`;
    } else {
      return `${(byte / (1024 * 1024)).toFixed(2)}MB`;
    }
  };

  const nameFormat = (name, maxLength) => {
    if (name.length <= maxLength) {
      return name;
    }
    const ellipsis = "..";
    const lastFullStopIndex = name.lastIndexOf(".");
    const lastPart = name.slice(lastFullStopIndex - 4);
    const firstPart = name.slice(0, maxLength - 8);
    return `${firstPart}${ellipsis}${lastPart}`;
  };

  return (
    <div
      className="w-full bg-gray-25"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {selectedFile ? (
        <div className="flex items-center justify-between p-4 md:p-8">
          <div className="flex items-center gap-3">
            <img src={fileUploaded} alt="" />
            <div>
              <p className="text-sm font-medium leading-tight  text-gray-600">
                File Attached
              </p>
              <div className="h-1"></div>
              <div className="flex items-center gap-1">
                <img src={paperClip} alt="" />
                <p className="text-xs leading-none text-gray-400">
                  {nameFormat(selectedFile.name, 20)} (
                  {sizeFormat(selectedFile.size)})
                </p>
              </div>
            </div>
          </div>
          <button
            className="p-2 rounded-lg bg-gray-0"
            onClick={() => {
              setSelectedFile(null);
            }}
          >
            <img src={deleteFile} alt="" />
          </button>
        </div>
      ) : (
        <label htmlFor={id} className="w-full p-4 md:p-8 ">
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
            id={id}
            onChange={handleFileInputChange}
            hidden
          />
          <div className="flex center gap-3">
            <img src={fileUpload} alt="" />
            <div>
              <p className="text-sm font-medium leading-tight underline text-primary-500">
                Click or drag to upload file
              </p>
              <div className="h-1"></div>
              <p className="text-xs leading-none text-gray-400">
                PDF, JPG or PNG, 3MB max
              </p>
            </div>
          </div>
        </label>
      )}
      {/* {selectedFile ? (
          <p>Selected File: {selectedFile.name}</p>
        ) : (
          <p>Drag and drop a file or click here to select a file</p>
        )} */}
    </div>
  );
};

export default FileUploader;
