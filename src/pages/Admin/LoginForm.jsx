import AppLogo from "../../assets/Images/Logo.svg"

const LoginForm = () => {
  return (

    
        <div className="">
       <a
      href="/"
      className="flex items-center"
    >
      <img
        src={AppLogo}
        alt="Logo"
        className="md:h-[80px] lg:w-[88px] sm:h-[70px]  h-[60px] w-[70px] mt-10 mb-10 ml-20"
      />
    </a> 
   
       
    <div className="bg-white lg:mx-[34%] lg:py-10 lg:px-10 mx-[10%] py-[10px] rounded-[25px]">
    <header className="absolute left-[38%] mb-15 lg:text-3xl md:text-2xl text-2xl font-Bold text-[#000] md:text-left">
     Log in
    </header>
{/* form starts */}

    <form className="mt-10 py-10">
      <div className="relative mb-2 group text-sm font-Regular text-[#858585] items-center justify-center flex">
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          name="firstname"
          className="block w-[350px] h-[55px] p-3 lg:mx-0 mx-6 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-blue-300"
        />
      </div>
      <div className="relative w-full mb-6 group text-sm font-Regular text-[#858585] items-center justify-center flex">
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          required
          className="block w-[350px] h-[55px] p-3 lg:mx-0 mx-6 text-[#666] font-Regular rounded-lg bg-[#F4F5F7] sm:text-md outline-none focus:outline-blue-300"
        />
      </div>
      <a
        href="#"
        className="text-sm font-Regular text-[#942D99] absolute lg:right-[32%] px-20 mb-5  hover:underline"
      >
        Forgot Password?
      </a>
    
       <div className="flex justify-center items-center mt-4">
        <button
          type="submit"
          className="text-[#FFF] bg-[#DF327B] font-Regular rounded-full mt-10 p-3 md:w-[350px] w-[250px]"
        >
          <p className="text-center font-Bold text-md">Log in</p>
        </button>
       </div>
    </form>
    </div>
    </div>
  )
}

export default LoginForm
