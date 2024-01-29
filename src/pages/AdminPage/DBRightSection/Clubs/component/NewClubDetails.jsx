const NewClubDetails = () => {
  return (
    <div className="container mx-auto rounded-md py-4">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
      <div className="py-12 px-8 lg:ml-14">
       <h3 className="font-Bold mt-4 lg:text-4xl md:text-3xl sm:text-3xl text-3xl      lg:text-left text-center py-4 text-[#000]">
         School Details
       </h3>
      <div className="py-6 flex items-center justify-center">
        <form name="contact" method="post">
          <div className="mb-6">
            <label
              htmlFor="schoolName"
              className="block text-sm font-Medium text-[#393939] mb-2"
            >
              Name of School
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              placeholder=""
              className="block w-[350px] h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-sm font-Medium text-[#393939] mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder=""
              className="block w-[350px] h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
            />
          </div>
        </form>
      </div>
    </div>

       
        <div className="inline-flex mb-8 justify-center items-center img-fluid mx-8 mb-20">
          <div className="py-14 px-8 lg:ml-14">
            <h3 className="font-Bold lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#000]">
              Chaperon details
            </h3>
            <div className="py-6">
              <div className="font-Regular max-w-[470px] lg:text-xl md:text-lg sm:text-lg text-lg lg:text-left md:text-left text-center">
                <form name="contact" method="post">
                  <div className="flex gap-4">
                    <div className="relative z-0 w-full mb-6 group text-sm tracking-wider font-Medium text-[#393939] ">
                      First Name
                      <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder=""
                        className="block w-[175px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                      />
                    </div>
                    <div className="relative z-0 w-full mb-6 group text-sm tracking-wider font-Medium text-[#393939] ">
                      Last name
                      <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder=""
                        className="block w-[175px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                      />
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-6 group tracking-wider text-sm font-Medium text-[#393939]">
                    Email address
                    <input
                      type="name"
                      id="name"
                      name="name"
                      placeholder=""
                      className="block w-[350px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                    />
                  </div>
                  <div className="relative z-0 w-full mb-6 group tracking-wider text-sm font-Medium text-[#393939]">
                    Contact
                    <input
                      type="name"
                      id="name"
                      name="name"
                      placeholder=""
                      className="block w-[350px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between lg:ml-10 mt-10 pb-4 border-b-2 border-[#D9D9D9]
     border-dashed"
      ></div>
    </div>
  );
};

export default NewClubDetails;
