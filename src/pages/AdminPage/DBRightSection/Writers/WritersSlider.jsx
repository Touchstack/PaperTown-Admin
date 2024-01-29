import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const WritersSlider = () => {
  return (
    <div>
      <div>
        <div className="absolute flex items-center justify-between">
          {/* slider icons section start */}
          <div className="flex items-center lg:mr-20 md:mr-10 mr-3">
            <a
              href="#"
              className="mr-3  p-2 rounded-full text-gray-200 hover:bg-green-100 hover:ring-green-200 "
            >
              <FaAngleLeft />
            </a>
            <span className="items-center">1  2  3  4  5  6  7  8  9</span>
            <a
              href="#"
              className="mr-3 border-[#52B4AE] border-2 p-2 rounded-full text-[#52B4AE] hover:bg-green-100 hover:ring-green-200 "
            >
              <FaAngleRight />
            </a>
          </div>
          {/* slider icons section end */}
        </div>
      </div>
    </div>
  )
}

export default WritersSlider

