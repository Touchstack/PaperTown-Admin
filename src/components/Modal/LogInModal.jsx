import { useState } from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { logInUser } from "../../api";
import { ClipLoader } from 'react-spinners';

const LogInModal = ({ isVisible, onClose }) => {
  const [error, setError] = useState("");

  if (!isVisible) {
    return null;
  }
  const handleLogin = async () => {
    try {
      const data = {
        email: formik.values.email,
        password: formik.values.password,
      };
      const res = await logInUser(data);

      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
      } else {
        console.error("Login failed. Unexpected status:", res.status);
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed. Error:", error);
      setError("Login failed. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values, actions) => {
      try {
        await handleLogin();
        actions.resetForm();
      } catch (error) {
        console.error("Login failed. Error:", error);
        setError("Login failed. Please try again.");
      }
    },
  });

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <header className="lg:text-3xl md:text-2xl sm:text-xl text-xl pb-6 mt-5 ml-5 font-Bold text-[#000] break-normal md:break-all">
        Log in
      </header>

      <form onSubmit={formik.handleSubmit} name="contact" method="post">
        <div className="relative mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-[350px] h-[55px] p-3 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-amber-300"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="error absolute bottom-0 left-0 ml-8 mb-[-19px] text-red-500 text-xs">
              {formik.errors.password}
            </p>
          )}
        </div>
        <a
          href="#"
          className="text-sm font-Regular text-[#942D99] flex items justify-end m-4 hover:underline"
        >
          Forgot Password?
        </a>
        <div className="flex justify-center items-center">
        <button
          disabled={formik.isSubmitting}
          type="button"
          onClick={formik.handleSubmit}
          className="opacity-35 text-[#FFF] bg-[#DF327B] hover:bg-[#A12356] mt-2 font-Regular rounded-full p-3 md:w-[350px] w-[300px]"
        >
          {formik.isSubmitting ? (
            <ClipLoader color="#FFF" size={20} />
          ) : (
            <p className="text-center font-bold text-xl">Log in</p>
          )}
        </button>
        </div>
        <div className="flex items-center justify-center text-sm font-Regular m-8 text-[#828282]">
          Need an account?
          <a href="#" className="text-[#942D99] hover:underline ml-1">
            Sign up
          </a>
        </div>
      </form>
    </Modal>
  );
};

LogInModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default LogInModal;
