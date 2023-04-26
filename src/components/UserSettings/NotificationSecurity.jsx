import React from "react";
import { Switch } from "react-switch-input";
import key from '../../assets/icons/KeyPasswordEdit.svg'
const NotificationSecurity = () => {
  return (
    <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-10 p-4">
      <div className="flex justify-between">
        <div>
          <p className="text-md font-medium text-gray-600">
            Transaction Notification
          </p>
          <p className="text-sm text-gray-400">
            Receive email notifications on every state of your transactions.
          </p>
        </div>
        <Switch
          name="notification"
          theme={"two"}
          styles={{
            track: {
              backgroundColor: "#8872FD",
            },
            trackChecked: {
              backgroundColor: "#8872FD",
            },
            button: {
              backgroundColor: "white",
            },
            buttonChecked: {
              backgroundColor: "#8872FD",
            },
          }}
        />
      </div>
      <div className="h-10"></div>
      <div className="flex justify-between">
        <div>
          <p className="text-md font-medium text-gray-600">
            Login Notification
          </p>
          <p className="text-sm text-gray-400">
            Receive email notifications every time you login into to your
            account.
          </p>
        </div>
        <Switch
          name="notification"
          theme={"two"}
          styles={{
            track: {
              backgroundColor: "#8872FD",
            },
            trackChecked: {
              backgroundColor: "#8872FD",
            },
            button: {
              backgroundColor: "white",
            },
            buttonChecked: {
              backgroundColor: "#8872FD",
            },
          }}
        />
      </div>
      <div className="h-10"></div>
      <div className="flex justify-between">
        <div>
          <p className="text-md font-medium text-gray-600">Password</p>
          <p className="text-sm text-gray-400">
            Update your password information.
          </p>
        </div>
        <div className="px-4 py-2.5 border border-gray-200 rounded-lg flex gap-2 items-center">
          <img src={key} alt="" />
          <p className="text-md text-gray-600 font-medium">Change Password</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationSecurity;
