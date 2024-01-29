import { TbTargetArrow } from "react-icons/tb";

const NarrativeBody = () => {
  return (
    <div className="md:px-10 px-6">
      <div className="flex items-center">
        <TbTargetArrow className="text-[20px] ml-2 mr-2" />
        <p className="text-[14px]">10 entries</p>
      </div>
      <p className="text-[14px] mt-4 md:px-4">
        It has survived not only five centuries, but also the leap into electronic<p>typesetting,
        remaining essentially unchanged.</p>
      </p>
      <div className="border-b border-dotted mt-6"></div>
    </div>
  );
};

export default NarrativeBody;
