function Roles() {
  return (
    <div>
      <div className="hidden lg:inline-block lg:flex mt-5">
        <table className="table-auto ml-20">
          <thead>
            <tr>
              <th className="font-Medium text-[#9A9A9A] text-start px-14 py-2">
                Role
              </th>
              <th className="font-Medium text-[#9A9A9A] text-start px-[170px] py-2">
                Description
              </th>
              <th className="font-Medium text-[#9A9A9A] text-start px-[180px] py-2">
                Date Created
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <hr className="hidden lg:inline-block text-[#D9D9D9] mt-5 ml-[50px] w-[990px]" />
      <div className="lg:flex lg:flex-col mt-10">
        <table className="lg:table-auto lg:table-fixed lg:ml-20 mb-5">
          <tbody className="mb-5">
            {/* start   */}
            <div className="lg:hidden  inline-block ">
              <p className="ml-10 font-Bold  underline"> Description</p>
            </div>
            <tr>
              <td className="font-medium lg:px-10 lg:py-5 px-10">Admin</td>
              <td className="font-medium lg:px-5 lg:py-5">
                A description to what this specific role can do
              </td>
              <td className="font-medium lg:px-20 lg:py-5 px-5">
                3rd Feb, 2023
              </td>
            </tr>
            {/* end   */}
            {/* start   */}
            <div className="lg:hidden  inline-block ">
              <p className="ml-10 font-Bold  underline"> Description</p>
            </div>
            <tr className="bg-[#F9F9FB] border-gray-300 rounded-md">
              <td className="font-medium lg:px-10 lg:py-5 px-10">Editor</td>
              <td className="font-medium lg:px-5 lg:py-5">
                A description to what this specific role can do
              </td>
              <td className="font-medium lg:px-20 lg:py-5 px-5">
                3rd Feb, 2023
              </td>
            </tr>
            {/* end   */}
            {/* start   */}
            <div className="lg:hidden  inline-block ">
              <p className="ml-10 font-Bold  underline"> Description</p>
            </div>
            <tr>
              <td className="font-medium lg:px-10 lg:py-5 px-10">Admin</td>
              <td className="font-medium lg:px-5 lg:py-5">
                A description to what this specific role can do
              </td>
              <td className="font-medium lg:px-20 lg:py-5 px-5">
                3rd Feb, 2023
              </td>
            </tr>
            {/* end   */}
            {/* start   */}
            <div className="lg:hidden  inline-block ">
              <p className="ml-10 font-Bold  underline"> Description</p>
            </div>
            <tr className="bg-[#F9F9FB] border-gray-300 rounded-md">
              <td className="font-medium lg:px-10 lg:py-5 px-10">Editor</td>
              <td className="font-medium lg:px-5 lg:py-5">
                A description to what this specific role can do
              </td>
              <td className="font-medium lg:px-20 lg:py-5 px-5">
                3rd Feb, 2023
              </td>
            </tr>
            {/* end   */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Roles;
