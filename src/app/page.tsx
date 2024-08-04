import Layout from "@/components/Layout";
export default function Home() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-stone-800">
          ICT Technical Assistance Request Form
        </h1>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                value={new Date().toISOString().split("T")[0]}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-slate-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                value={currentTime}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Requested By
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Office/Service/Bureau
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
              />
            </div>
            {/* Add other form fields similarly */}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Type of Request
            </label>
            <div className="mt-2 grid grid-cols-3 gap-4">
              <div>
                <input type="checkbox" id="desktop-repair" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  Desktop/Laptop Repair
                </label>
                {/* Add more checkboxes similarly */}
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Hardware related
                  </label>
                </div>

                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Software related
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    PC Reformat/Reimage
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    PC Tuneup/Windows Update
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Virus Scanning
                  </label>
                </div>
              </div>

              <div>
                <input type="checkbox" id="desktop-repair" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  APPLICAION/SOFTWARE/SYSTEM ASSISTANCE
                </label>
                {/* Add more checkboxes similarly */}

                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    DILG Portal/System
                  </label>
                </div>

                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Google Drive
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Software Installation
                  </label>
                </div>

                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Video Conferencing
                  </label>
                </div>

                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Others (please specify)
                  </label>
                </div>
              </div>
              <div>
                <input type="checkbox" id="desktop-repair" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  INTERNET CONNECTIVITY
                </label>
                {/* Add more checkboxes similarly */}
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Installation/Relocation
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Troubleshooting
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Web Apps/Website Access
                  </label>
                </div>
              </div>
              <div>
                <input type="checkbox" id="desktop-repair" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  HARDWARE INSTALLATION
                </label>
                {/* Add more checkboxes similarly */}
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Desktop Assembly/PC Setup
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Computer Parts Installation
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Router/Access Point Installation
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Network Switch Deployment
                  </label>
                </div>
              </div>
              <div>
                <input type="checkbox" id="desktop-repair" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  GOVMAIL ASSISTANCE
                </label>
                {/* Add more checkboxes similarly */}
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Create/Update/Delete Account
                  </label>
                </div>

                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Password Reset/Unblock Account
                  </label>
                </div>
              </div>
              <div>
                <input type="checkbox" id="desktop-repair" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  POSTING/UPDATING OF INFORMATION IN THE DILG WEBSITE
                </label>
                {/* Add more checkboxes similarly */}
              </div>

              <div>
                <input type="checkbox" id="desktop-repair" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  PRINTER/SCANNER/COPIER
                </label>
                {/* Add more checkboxes similarly */}
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Installation/Setup
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Networking/Sharing
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Troubleshooting
                  </label>
                </div>
              </div>
              <div>
                <input type="checkbox" id="desktop-repair" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
                  IP TELEPHONY
                </label>
                {/* Add more checkboxes similarly */}
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Installation/Relocation
                  </label>
                </div>
                <div className="ml-4">
                  <input type="checkbox" id="desktop-repair" className="mr-2" />
                  <label
                    htmlFor="desktop-repair"
                    className="text-sm text-gray-700"
                  >
                    Troubleshooting
                  </label>
                </div>
              </div>
              <div>
                <input type="checkbox" id="desktop-repair" className="mr-2" />
                <label
                  htmlFor="desktop-repair"
                  className="text-sm text-gray-700"
                >
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-slate-800"
                rows={4}
              ></textarea>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Action Taken/Resolution/Recommendation
              </label>
              <textarea
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
    </div>
  );
}
