function SelectRole() {
  return (
    <div>
      <div className="lg:mt-20 mt-5 ml-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">
            Dashboard
          </h6>
          <div className="flex gap-3 items-center cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View dashboard</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">Writers</h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View writers</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add writer</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Edit writer</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Remover writer</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">Club</h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View clubs</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Manage club</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add club</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Delete club</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add witer to club</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Remover writer from club</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">
            Submissions
          </h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add category</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Remove category</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View submissions</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Grade submissions</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">Team</h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add member</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Edit member details</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Reset credentials</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add/edit roles</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>Add/edit permissions</p>
          </div>
        </div>
        {/* end  */}
        {/* start */}
        <div>
          <h6 className="text-[#000000] font-Bold text-[23px] mb-3">CMS</h6>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />
            <p>View CMS</p>
          </div>
          <div className="flex gap-3 items-center mb-4 cursor-pointer">
            <input
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-5 h-5 text-[#6E0075] bg-gray-600 border-gray-300 rounded"
            />

            <p>Add/edit content</p>
          </div>
        </div>
        {/* end  */}
      </div>
      <div className="ml-20">
        <button
          className="shadow bg-[#DF327B] mt-5 text-white font-bold py-3 px-20 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SelectRole;
