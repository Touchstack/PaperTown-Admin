import SmartgenesImg from "../../../../../assets/Images/SmartgenesImg.png";
import child1 from "../../../../../assets/Images/child1.png";

const ProfileBody = () => {
  return (
    <div className="lg:px-[70px]">
      <div className="border-t border-dotted border-gray-200 mb-4"></div>

      <h2 className="text-xl font-bold mb-4 mt-20 lg:px-[70px]">Interests</h2>

      <div className="flex gap-4 lg:px-[70px] lg:mb-10 mb-5">
        <div className=" w-[60px] h-[40px] rounded-full bg-blue-200 text-blue-500 flex items-center justify-center">
          Fiction
        </div>
        <div className="w-[60px] h-[40px] rounded-full bg-yellow-200 text-yellow-500 flex items-center justify-center">
          Fiction
        </div>
        <div className="w-[60px] h-[40px] rounded-full bg-fuchsia-200 text-fuchsia-600 flex items-center justify-center">
          Fiction
        </div>
      </div>

      <div className="mt-8 lg:px-[70px]">
        <div className="relative bg-fuchsia-50 lg:px-[50px] rounded-[20px] lg:h-[321px] p-4">
          <h2 className="text-4xl font-Bold mb-5 border-b border-gray-200 pb-2">Clubs</h2>
          <div className="flex items-center">
            <img src={SmartgenesImg} className="w-[100px] h-[70px] rounded-[10px] lg:mr-6 mr-4" alt="Smartgenes Club" />
            <div>
              <p className="text-lg font-bold ">The Smartgenes Club</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    className="w-[24.50px] h-[24.50px]  -mr-2 relative z-[1]"
                    src={child1}
                    alt={`image-${index}`}
                  />
                ))}
              </div>
              <p className="text-xs">15 members</p>
            </div>
          </div>
        </div>

        <p className="text-4xl font-Bold mb-4 lg:mr-[3%] mt-20">Writing Record</p>
      </div>
    </div>
  );
};

export default ProfileBody;

