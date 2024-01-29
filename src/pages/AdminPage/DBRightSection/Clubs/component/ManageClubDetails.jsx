import Map from "../../../../../assets/Images/map.svg";
const ManageClubDetails = () => {
  return (
    <div className="container mx-auto rounded-md py-4">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
        <div className="py-12 flex items-center justify-center ">
          <div className="py-6">
            <h3 className="font-Bold mt-4 lg:text-4xl md:text-3xl sm:text-3xl text-3xl lg:text-left text-center py-4 text-[#000]">
              School Details
            </h3>
            <div className="font-Regular flex flex-col items-center justify-center max-w-[470px] lg:text-xl md:text-lg sm:text-lg text-lg lg:text-left md:text-left text-[#000] text-center">
              <form name="contact" method="post">
                <div className="relative z-0 w-full mb-6 group text-sm tracking-wider font-Medium text-[#393939]">
                  Name of School
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Mary Mother of Good Counsel"
                    className="block w-[350px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group tracking-wider text-sm font-Medium text-[#393939]">
                  Location
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="2 JKN Airport West, JWHM+WJH, First Floor, Blu Busin ... "
                    className="block w-[350px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                  />
                </div>
              </form>
              <img src={Map} alt="Pencil.svg" />
            </div>
          </div>
        </div>
        <div className="inline-flex justify-center items-center img-fluid mx-8 mb-20">
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
                        placeholder="Mary"
                        className="block w-[175px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                      />
                    </div>
                    <div className="relative z-0 w-full mb-6 group text-sm tracking-wider font-Medium text-[#393939] ">
                      Last name
                      <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Njoku"
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
                      placeholder="name@domain.com"
                      className="block w-[350px] tracking-wider h-[55px] p-3 text-[#000000] font-SemiBold rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
                    />
                  </div>
                  <div className="relative z-0 w-full mb-6 group tracking-wider text-sm font-Medium text-[#393939]">
                    Contact
                    <input
                      type="name"
                      id="name"
                      name="name"
                      placeholder="0200 234 567"
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

export default ManageClubDetails;
