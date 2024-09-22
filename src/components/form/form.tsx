"use client";
import { useForm } from "react-hook-form";
import Select from "@/components/form_elements/Select";
import { Option } from "@/types";
import { RequestSchema } from "@/schemas/request.schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertRequest } from "@/services/request";
import Swal from "sweetalert2";

type Prop = {
  offices: {
    name: string;
    label: string;
    options: Option[];
  };
};
const Form: React.FC<Prop> = ({ offices }) => {
  type RequestFormData = z.infer<typeof RequestSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestFormData>({ resolver: zodResolver(RequestSchema) });
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;
  const submit = async (formData: RequestFormData) => {
    Swal.fire({
      title: "Test",
    });
    // const result = await insertRequest(formData);
    // console.log(result);
  };
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-stone-800">
        ICT Technical Assistance Request Form
      </h1>
      <form onSubmit={handleSubmit(submit)}>
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
                    {...register("date_requested")}
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-slate-800"
                  />
                  {errors.date_requested && (
                    <span className="text-red-500 italic text-sm">
                      {errors.date_requested.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <input
                    type="time"
                    {...register("time_requested")}
                    defaultValue={currentTime}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                  />
                  {errors.time_requested && (
                    <span className="text-red-500 italic text-sm">
                      {errors.time_requested.message}
                    </span>
                  )}
                </div>
              </div>
              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Requested By
                </label>
                <input
                  type="text"
                  {...register("request_name")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
                {errors.request_name && (
                  <span className="text-red-500 italic text-sm">
                    {errors.request_name?.message}
                  </span>
                )}
              </div>
              <div className=" mt-2">
                <Select
                  name="office"
                  label={offices.label}
                  options={offices.options}
                  register={register}
                  errors={errors}
                />
              </div>
              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700 ">
                  Contact number (if any)
                </label>
                <input
                  type="text"
                  {...register("contact_no")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
                {errors.contact_no && (
                  <span className="text-red-500 italic text-sm">
                    {errors.contact_no.message}
                  </span>
                )}
              </div>

              <div className=" mt-2">
                <label className="block text-sm font-medium text-gray-700 ">
                  Agreed Timeline (if any)
                </label>
                <input
                  type="text"
                  {...register("agreed_timeline")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                />
                {errors.agreed_timeline && (
                  <span className="text-red-500 italic text-sm">
                    {errors.agreed_timeline.message}
                  </span>
                )}
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
          {errors.request_type && (
            <span className="text-red-500 italic text-sm">
              {errors.request_type.message}
            </span>
          )}
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <input
                type="checkbox"
                {...register("request_type")}
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
                  {...register("request_type")}
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
                  {...register("request_type")}
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
                  {...register("request_type")}
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
                  {...register("request_type")}
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
                  {...register("request_type")}
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
                {...register("request_type")}
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
                  {...register("request_type")}
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
                  {...register("request_type")}
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
                  {...register("request_type")}
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
                  {...register("request_type")}
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
                  {...register("request_type")}
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
                {...register("request_type")}
                className="mr-2"
                value={3}
              />
              <label htmlFor="internet_conn" className="text-sm text-gray-700">
                INTERNET CONNECTIVITY
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="installation"
                  {...register("request_type")}
                  className="mr-2"
                  value={53}
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
                  {...register("request_type")}
                  className="mr-2"
                  value={54}
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
                  {...register("request_type")}
                  className="mr-2"
                  value={55}
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
                {...register("request_type")}
                className="mr-2"
                value={4}
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                HARDWARE INSTALLATION
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="assembly"
                  {...register("request_type")}
                  className="mr-2"
                  value={56}
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
                  {...register("request_type")}
                  className="mr-2"
                  value={57}
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
                  {...register("request_type")}
                  className="mr-2"
                  value={58}
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
                  {...register("request_type")}
                  className="mr-2"
                  value={59}
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
                {...register("request_type")}
                className="mr-2"
                value={5}
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                GOVMAIL ASSISTANCE
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="account"
                  {...register("request_type")}
                  className="mr-2"
                  value={27}
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
                  {...register("request_type")}
                  className="mr-2"
                  value={28}
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
                {...register("request_type")}
                className="mr-2"
                value={6}
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
                {...register("request_type")}
                className="mr-2"
                value={7}
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                PRINTER/SCANNER/COPIER
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="setup_installation"
                  {...register("request_type")}
                  className="mr-2"
                  value={29}
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
                  {...register("request_type")}
                  className="mr-2"
                  value={30}
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
                  {...register("request_type")}
                  className="mr-2"
                  value={31}
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
                {...register("request_type")}
                className="mr-2"
                value={8}
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                IP TELEPHONY
              </label>
              {/* Add more checkboxes similarly */}
              <div className="ml-4">
                <input
                  type="checkbox"
                  id="install_relocation"
                  {...register("request_type")}
                  className="mr-2"
                  value={32}
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
                  value={33}
                  type="checkbox"
                  {...register("request_type")}
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
                value={9}
                {...register("request_type")}
                className="mr-2"
              />
              <label htmlFor="desktop-repair" className="text-sm text-gray-700">
                OTHERS (please specify)
              </label>
              {/* Add more checkboxes similarly */}
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                {...register("other_request")}
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
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
              rows={4}
              {...register("remarks")}
            ></textarea>
            {errors.remarks && (
              <span className="text-red-500 italic text-sm">
                {errors.remarks.message}
              </span>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Action Taken/Resolution/Recommendation
            </label>
            <textarea
              {...register("action_taken")}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
              rows={4}
              disabled
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
