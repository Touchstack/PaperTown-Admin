import PropTypes from 'prop-types';

const PromptCard = ({ onClick }) => {
  return (
    <div className="flex flex-col md:flex-row mt-3 md:overflow-x-auto overflow-y-auto md:ml-[9rem] gap-3 max-h-[400px] cursor-pointer">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex-shrink-0 w-[207px] h-[155px] rounded-[16px] border-[1px] border-[#E8E8E8]  p-5 mb-5" onClick={onClick}>
          <div className="flex flex-row gap-2 text-[6.99px]">
            <div className="w-[47px] h-[19px] text-[#fff] bg-[#B44DB8] rounded-[26px] flex items-center justify-center">
              Grade 6-12
            </div>

            <div className="w-[47px] h-[19px] border-[0.538px] text-[#000] border-[#000] rounded-[26px] flex items-center justify-center">
              Memoir
            </div>
          </div>

          <h1 className="text-[#000000] text-[19.356px] font-[700] w-[169px] leading-5 pt-2">
            A definition of superego
          </h1>

          <p className="text-[#000000] text-[10.603px] w-[169px] pt-2">
            Writers will identify their favorite sensory memories and transfer them to a visual heart map.
          </p>
        </div>
      ))}
    </div>
  );
};

PromptCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PromptCard