"use client";
import { useState } from "react";
import Select from "@/components/form_elements/Select";
import { Option } from "@/types";
type Prop = {
  offices: {
    name: string;
    label: string;
    options: Option[];
  };
};
const Form: React.FC<Prop> = ({ offices }) => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;

  const submit = async (formData: FormData) => {
    console.log("data:", Object.fromEntries(formData.entries()));
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      'input[name="request_type[]"]:checked'
    );

    const requestTypes = Array.from(checkboxes).map(
      (checkbox: HTMLInputElement) => checkbox.value
    );
    console.log(requestTypes);
  };
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-stone-800">
        ICT Technical Assistance Request Form
      </h1>
      <form action={submit}>
        <div className="grid grid-cols-2 gap-2">
          <div className="border rounded">
            <div className="bg-gray-800 p-2 rounded-t">
              <h4 className="text-sm">PERSONNEL INFORMATION </h4>
            </div>

            <div className="p-2">
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    name="request_date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <input
                    type="time"
                    name="request_time"
                    defaultValue={currentTime}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                  />
                </div>
              </div>
              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Requested By
                </label>
                <input
                  type="text"
                  name="request_name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
              </div>
              <div className=" mt-2">
                <Select
                  name={offices.name}
                  label={offices.label}
                  options={offices.options}
                />
              </div>
              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700 ">
                  Contact number (if any)
                </label>
                <input
                  type="text"
                  name="contact_no"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
              </div>

              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700 ">
                  Agreed Timeline (if any)
                </label>
                <input
                  type="text"
                  name="timeline"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
              </div>
            </div>
          </div>
          {/* HARDWARE COMPONENT DETAILS */}
          <div className="border rounded">
            <div className="bg-gray-800 p-2  rounded-t">
              <h4 className="text-sm">HARDWARE INFORMATION (if needed)</h4>
            </div>
            <div className="p-2">
              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700 ">
                  Equipment Type
                </label>
                <input
                  type="text"
                  name="equipment_type"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
              </div>

              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700 ">
                  Brand/Model
                </label>
                <input
                  type="text"
                  name="model"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
              </div>
              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700 ">
                  Property No
                </label>
                <input
                  type="text"
                  name="property_no"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
              </div>
              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700 ">
                  Equipment SN
                </label>
                <input
                  type="text"
                  name="equipment_sn"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Type of Request
          </label>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <input
                type="checkbox"
                name="request_type[]"
                value={1}
                className="mr-2"
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                Desktop/Laptop Repair
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="hardware-related"
                  name="request_type[]"
                  value={10}
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Hardware related
                </label>
              </div>

              <div className="ml-4">
                <input
                  type="checkbox"
                  id="software-related"
                  name="request_type[]"
                  value={11}
                  className="mr-2"
                />
                <label
                  htmlFor="software-related"
                  className="text-sm text-gray-700"
                >
                  Software related
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="reimage"
                  value={12}
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  PC Reformat/Reimage
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="windows-update"
                  name="request_type[]"
                  value={13}
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  PC Tuneup/Windows Update
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="virus-scanning"
                  value={14}
                  className="mr-2"
                  name="request_type[]"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Virus Scanning
                </label>
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                id="app_software_system"
                value={2}
                name="request_type[]"
                className="mr-2"
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                APPLICATION/SOFTWARE/SYSTEM ASSISTANCE
              </label>
              {/* Add more checkboxes similarly */}

              <div className="ml-4">
                <input
                  type="checkbox"
                  id="dilg_portal"
                  name="request_type[]"
                  value={15}
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  DILG Portal/System
                </label>
              </div>

              <div className="ml-4">
                <input
                  type="checkbox"
                  id="google-drive"
                  name="request_type[]"
                  value={16}
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Google Drive
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="software-installation"
                  name="request_type[]"
                  className="mr-2"
                  value={17}
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Software Installation
                </label>
              </div>

              <div className="ml-4">
                <input
                  type="checkbox"
                  id="video-conferencing"
                  name="request_type[]"
                  className="mr-2"
                  value={18}
                />
                <label
                  htmlFor="video-conferencing"
                  className="text-sm text-gray-700"
                >
                  Video Conferencing
                </label>
              </div>

              <div className="ml-4">
                <input
                  type="checkbox"
                  id="sa-others"
                  name="request_type[]"
                  className="mr-2"
                  value={19}
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Others (please specify)
                </label>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="internet_conn"
                name="request_type[]"
                className="mr-2"
              />
              <label htmlFor="internet_conn" className="text-sm text-gray-700">
                INTERNET CONNECTIVITY
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="installation"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Installation/Relocation
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="troubleshoot"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Troubleshooting
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="web_access"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Web Apps/Website Access
                </label>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="hardware_install"
                name="request_type[]"
                className="mr-2"
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                HARDWARE INSTALLATION
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="assembly"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Desktop Assembly/PC Setup
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="computer_parts"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Computer Parts Installation
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="ap_installation"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Router/Access Point Installation
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="network_switch"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Network Switch Deployment
                </label>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="govmail"
                name="request_type[]"
                className="mr-2"
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                GOVMAIL ASSISTANCE
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="account"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Create/Update/Delete Account
                </label>
              </div>

              <div className="ml-4">
                <input
                  type="checkbox"
                  id="reset_pass"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Password Reset/Unblock Account
                </label>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="dilg_web"
                name="request_type[]"
                className="mr-2"
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                POSTING/UPDATING OF INFORMATION IN THE DILG WEBSITE
              </label>
              {/* Add more checkboxes similarly */}
            </div>

            <div>
              <input
                type="checkbox"
                id="printer"
                name="request_type[]"
                className="mr-2"
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                PRINTER/SCANNER/COPIER
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="setup_installation"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Installation/Setup
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="network"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Networking/Sharing
                </label>
              </div>
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="troubleshoot_1"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Troubleshooting
                </label>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="ip_phone"
                name="request_type[]"
                className="mr-2"
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                IP TELEPHONY
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="install_relocation"
                  name="request_type[]"
                  className="mr-2"
                />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Installation/Relocation
                </label>
              </div>
              <div className="ml-4">
                <input type="checkbox" name="request_type[]" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Troubleshooting
                </label>
              </div>
            </div>
            <div>
              <input type="checkbox" name="request_type[]" className="mr-2" />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                OTHERS (please specify)
              </label>
              {/* Add more checkboxes similarly */}
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                rows={4}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Additional Information/Remarks
            </label>
            <textarea
              name="remarks"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
              rows={4}
            ></textarea>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Action Taken/Resolution/Recommendation
            </label>
            <textarea
              name="action_taken"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
              rows={4}
            ></textarea>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
