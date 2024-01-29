import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const AddNewPrompt = ({ isVisible, onClose }) => {
  const [loading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  if (!isVisible) return null;
  const handleClose = () => {
    onClose();
  };

      const onSubmit = async () => {
        setIsLoading(true)
        // do something or make an API call
      };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center px-5 py-5">
      <div className="w-[500px] max-h-[100vh] bg-[#fff] rounded-[24px] flex flex-col p-5 overflow-y-auto">
        <div className="flex justify-between items-center">
          <p className="text-[#040A1D] text-[36px] font-[700]">
            New writing prompt
          </p>
          <IoCloseSharp color="#000" onClick={handleClose} cursor={"pointer"} />
        </div>

        {/* form fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="pt-5">
          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-lg font-medium text-gray-800"
            >
              Select prompt category
            </label>

            <select
              {...register("category", { required: "Category is required" })}
              id="category"
              name="category"
              className="mt-1 p-3 w-full bg-[#EFF3F4] border border-gray-300 rounded-[10px] outline-none focus:border-none"
            >
              {/* Add your options here */}
              <option value="" disabled>
                Select category
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              {/* Add more options as needed */}
            </select>

            {errors.category && (
              <p className="text-red-500 text-sm mt-2">
                {errors.category.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mt-2">
            <label
              htmlFor="grade"
              className="text-lg font-medium text-gray-800"
            >
              Eligible grades
            </label>
            <input
              {...register("grade", { required: "Grades are required" })}
              type="grade"
              id="grade"
              name="grade"
              placeholder="Enter grade range"
              className="mt-1 p-3 w-full bg-[#EFF3F4] border border-gray-300 rounded-[10px] outline-none focus:border-none"
            />
            {errors.grade && (
              <p className="text-red-500 text-sm mt-2">
                {errors.grade.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mt-2">
            <label
              htmlFor="title"
              className="text-lg font-medium text-gray-800"
            >
              Prompt title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="title"
              id="title"
              name="title"
              placeholder="Title"
              className="mt-1 p-3 w-full bg-[#EFF3F4] border border-gray-300 rounded-[10px] outline-none focus:border-none"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-2">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mt-2">
            <label
              htmlFor="description"
              className="text-lg font-medium text-gray-800"
            >
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              name="description"
              placeholder="Enter description"
              className="mt-1 p-3 w-full bg-[#EFF3F4] border border-gray-300 rounded-[10px] outline-none focus:border-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-2">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mt-2">
            <label
              htmlFor="submissionGuidelines"
              className="text-lg font-medium text-gray-800"
            >
              Submission Guidelines
            </label>
            <textarea
              {...register("submissionGuidelines", {
                required: "Submission guidelines are required",
              })}
              id="submissionGuidelines"
              name="submissionGuidelines"
              placeholder="Enter submission guidelines"
              className="mt-1 p-3 w-full bg-[#EFF3F4] border border-gray-300 rounded-[10px] outline-none focus:border-none"
            />
            {errors.submissionGuidelines && (
              <p className="text-red-500 text-sm mt-2">
                {errors.submissionGuidelines.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mt-2">
            <label
              htmlFor="title"
              className="text-lg font-medium text-gray-800"
            >
              Resources
            </label>
            <input
              {...register("resources", { required: "Resources is required" })}
              type="resources"
              id="resources"
              name="resources"
              placeholder="List resources"
              className="mt-1 p-3 w-full bg-[#EFF3F4] border border-gray-300 rounded-[10px] outline-none focus:border-none"
            />
            {errors.resources && (
              <p className="text-red-500 text-sm mt-2">
                {errors.resources.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-5 bg-[#DF327B] w-[100%] h-[54px] font-[700] text-white rounded-[50px] px-5"
            disabled={isSubmitting}
          >
            {loading ? (
              <ClipLoader color={"#ffffff"} loading={loading} size={25} />
            ) : (
              "Add prompt"
            )}
          </button>
        </form>
        {/* form fields */}
      </div>
    </div>
  );
};

AddNewPrompt.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddNewPrompt;
