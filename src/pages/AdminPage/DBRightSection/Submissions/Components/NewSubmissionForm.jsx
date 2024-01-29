

function NewSubmissionForm() {
  return (
    <div className="bg-[#FFFFFF] rounded-[25px] h-screen w-screen">
      <main className="min-h-screen flex items-center justify-center lg:ml-[5%] lg:px-[40%]">
          <form className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 rounded-lg p-6">
       
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-8">
              <div>
                <label className="block text-sm pb-2 mt-2" htmlFor="Firstname">
                 Create a new category here
                </label>
                <input
                  className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[500px] h-[50px] sm:w-200px"
                  type="text"
                  name="Firstname"
                  placeholder="Category Name"
                />
              </div>
            </div>
            <div className="w-[500px]">
              <label className="block text-sm pb-2 mt-5" htmlFor="email">
                Description
              </label>
              <input
                className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[500px] h-[150px] sm:w-200px "
                type="text"
                name="ConactNumber"
                placeholder=""
              />
            </div>
            <br />
            <div className="w-[500px]">
              <label className="block text-sm pb-2">Submission Guidelines</label>
              <input
                className="border-gray-500 bg-[#F4F5F7] w-[500px] rounded-md p-2  h-[155px]"
                type="text"
                name="email"
                placeholder=""
              />
            </div>
            <br />
            <br />
            <button
              type="submit"
              className="bg-[#DB2E78] font-Bold text-white rounded-full p-2 w-[500px] h-[55px]"
            >
              Submit
            </button>
          </form>
        </main>
        </div>
  );
}

export default NewSubmissionForm;