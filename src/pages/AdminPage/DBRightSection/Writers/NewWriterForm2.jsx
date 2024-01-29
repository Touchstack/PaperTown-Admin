 

const NewWriterForm2 = () => {
  return (
   <div className="bg-[#FFFFFF] rounded-[25px] mt-2 h-screen w-screen">
      <main className="min-h-screen flex items-center justify-center lg:ml-[5%] lg:px-[40%]">
          <form className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 rounded-lg p-6">
       
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-8">
              <div>
                <label className="block text-sm pb-2 mt-2" htmlFor="Firstname">
                 Bio
                </label>
                <input
                  className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[500px] h-[150px] sm:w-200px"
                  type="text"
                  name="Firstname"
                  placeholder="Mary"
                />
              </div>
            </div>
            <div className="w-[500px]">
              <label className="block text-sm pb-2 mt-5" htmlFor="email">
                Age
              </label>
              <input
                className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[500px] h-[55px] sm:w-200px "
                type="text"
                name="ConactNumber"
                placeholder="0"
              />
            </div>
            <br />
            <div className="w-[500px]">
              <label className="block text-sm pb-2">School</label>
              <input
                className="border-gray-500 bg-[#F4F5F7] w-[500px] rounded-md p-2  h-[55px]"
                type="text"
                name="email"
                placeholder="Montessori"
              />
            </div>
            <br />
            <div className="w-[500px]">
              <label className="block text-sm pb-2">Grade</label>
              <input
                className="border-gray-500 bg-[#F4F5F7] rounded-md p-2 w-[500px] h-[55px]"
                type="text"
                name="text"
                placeholder="Grade 1"
              />
            </div>
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
};

export default NewWriterForm2;
