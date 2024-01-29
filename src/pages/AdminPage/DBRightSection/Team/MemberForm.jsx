import { FaAngleDown } from "react-icons/fa6";
function MemberForm() {
  return (
    <div>
      <div className="flex mt-10  justify-center">
        <h6 className="lg:w-[400px] w-[280px] text-[16px] ">
          Enter the email address of the member you wish to add. They’ll receive
          an email with instructions to setup their account.
        </h6>
      </div>
      <div className="lg:ml-[32%] ml-10 mt-10  justify-center items-center h-full">
        <form action="" className="overflow-x-hidden">
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email address
              </label>
              <input
                className="appearance-none  block lg:w-[400px] w-[300px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="name@domain.com"
              />
            </div>
          </div>
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              User role
            </label>
            <div className="relative">
              <select className="appearance-none   block lg:w-[400px] w-[300px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Select role</option>
                <option>Admin</option>
                <option>Contributor</option>
                <option>Editor</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0  lg:top-4 lg:right-[47%] right-[10%] top-4 items-center px-2 text-gray-700">
                <FaAngleDown />
              </div>
            </div>
          </div>
          <button
            className="shadow bg-[#DF327B] mt-5 text-white font-bold py-3 px-20 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MemberForm;
