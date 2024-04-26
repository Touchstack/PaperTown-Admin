const NewClubDetails = () => {
  return (
    <div className="container mx-auto rounded-md py-4">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4">
        {/* School Details */}
        <div className="py-12 px-8 lg:ml-14">
          <h3 className="font-Bold mt-4 lg:text-4xl md:text-3xl text-3xl lg:text-left text-center py-4 text-[#000]">
            School Details
          </h3>
          <div className="py-6">
            <form name="schoolDetails" method="post">
              <div className="mb-6">
                <label
                  htmlFor="schoolName"
                  className="block text-sm font-Medium text-[#393939]"
                >
                  Name of School
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  placeholder=""
                  className="block w-full lg:w-[300px] h-[55px] text-[#000000] p-6 font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block text-sm font-Medium text-[#393939]"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder=""
                  className="block w-full lg:w-[300px] h-[55px] p-6 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Chaperon details */}
        <div className="py-12 px-8 lg:ml-1">
          <h3 className="font-Bold mt-4 lg:text-4xl md:text-3xl text-3xl lg:text-left text-center py-4 text-[#000]">
            Chaperon details
          </h3>
          <div className="py-6">
            <div className="font-Regular max-w-full lg:max-w-[470px] lg:text-xl md:text-lg text-lg lg:text-left md:text-left">
              <form name="chaperonDetails" method="post">
                <div className="flex flex-col lg:flex-row gap-4 mb-6">
                  <div className="lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-Medium text-[#393939]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder=""
                      className="block w-full lg:w-[153px] h-[55px] p-6 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-Medium text-[#393939]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder=""
                      className="block w-full lg:w-[153px] h-[55px] p-6 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-Medium text-[#393939]"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    className="block w-full lg:w-[320px] h-[55px] p-6 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-Medium text-[#393939]"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder=""
                    className="block w-full lg:w-[320px] h-[55px] p-6 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:ml-10 mt-10 pb-4 border-b-2 border-[#D9D9D9] border-dashed"></div>
    </div>
  );
};

export default NewClubDetails;
