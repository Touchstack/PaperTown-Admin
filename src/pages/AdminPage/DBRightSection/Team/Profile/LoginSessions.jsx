function LoginSessions() {
  return (
    <div>
      <div className="lg:ml-20 ml-5 mt-20 ">
        <h6 className="text-[#000000] text-2xl font-Bold">Login Sessions</h6>
        <p>Places where user is logged into Papertown</p>

        <div className="text-left">
          <table className="table-auto mt-10 w-full -mx-10">
            <div className="hidden lg:inline-block">
              <thead className="">
                <tr>
                  <th className="lg:px-5 lg:py-2  ">Location</th>
                  <th className="lg:px-5 lg:py-2 ">Device</th>
                  <th className=" lg:px-5 lg:py-2 ">IP Address</th>
                  <th className="lg:px-5 lg:py-2">Time</th>
                </tr>
              </thead>
            </div>

            <tbody>
              {/* tb1 start  */}
              <tr>
                <td className="border-b  lg:px-20 lg:py-2">Koforidua</td>
                <td className="border-b  lg:px-20 lg:py-2">Safari - Mac OS</td>
                <td className="border-b  lg:px-20 lg:py-2">154.160.21.106</td>
                <td className="border-b  lg:px-20 lg:py-2">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
              {/* tb1 end  */}
              {/* tb1 start  */}
              <tr>
                <td className="border-b  lg:px-20 lg:py-2">Accra</td>
                <td className="border-b  lg:px-20 lg:py-2">Safari - Mac OS</td>
                <td className="border-b  lg:px-20 lg:py-2">154.160.21.106</td>
                <td className="border-b  lg:px-20 lg:py-2">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
              {/* tb1 end  */}
              {/* tb1 start  */}
              <tr>
                <td className="border-b  lg:px-20 lg:py-2">Lagos</td>
                <td className="border-b  lg:px-20 lg:py-2">Safari - Mac OS</td>
                <td className="border-b  lg:px-20 lg:py-2">154.160.21.106</td>
                <td className="border-b  lg:px-20 lg:py-2">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
              {/* tb1 end  */}
              {/* tb1 start  */}
              <tr>
                <td className="border-b  lg:px-20 lg:py-2">Benin City</td>
                <td className="border-b  lg:px-20 lg:py-2">Safari - Mac OS</td>
                <td className="border-b  lg:px-20 lg:py-2">154.160.21.106</td>
                <td className="border-b  lg:px-20 lg:py-2">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
              {/* tb1 end  */}
              {/* tb1 start  */}
              <tr>
                <td className="border-b  lg:px-20 lg:py-2">Lome</td>
                <td className="border-b  lg:px-20 lg:py-2">Safari - Mac OS</td>
                <td className="border-b  lg:px-20 lg:py-2">154.160.21.106</td>
                <td className="border-b  lg:px-20 lg:py-2">
                  May 13, 2021 12:23 AM
                </td>
              </tr>
              {/* tb1 end  */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LoginSessions;
