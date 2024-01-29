import Header from "./component/Header";
import Schools from "./component/Schools";
import Slider from "./component/Slider";

const Clubs = () => {
  return (
    <div className="mt-2 bg-[#FFFFFF] rounded-[25px]">
      {/* <div className="mt-2 bg-[#FFFFFF] h-[1210px] rounded-[25px]"></div> */}
      <Header />
      <Schools />
      <Slider />
    </div>
  );
};

export default Clubs;
