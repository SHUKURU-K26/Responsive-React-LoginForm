import { useState } from "react";

const LoginForm = () => {
  const [pass, setPass] = useState(false);

  return (
    <div className="flex flex-col bg-[#023D54] border-[1px] border-white w-[450px] h-[550px] p-[30px] justify-around rounded-[10px]">
      <h1 className="text-center text-4xl text-white font-semibold">LOGIN</h1>

      <input
        type="text"
        placeholder="Email or Username"
        className="p-[20px] text-5 text-[white] rounded-[8px] text-[20px] border-[white] border-[1px]"
      />

      <input
        type={pass ? "text" : "password"}
        placeholder="Password"
        className="p-[20px] text-[white] rounded-[8px] text-[20px] border-[white] border-[1px]"
      />

      <button className="bg-[#94DEA5] p-[20px] text-[white] text-[20px] rounded-[8px] opacity-100 cursor-pointer hover:opacity-75">
        Login
      </button>

      <div className="flex w-full justify-between">
        <div>
          <input type="checkbox" id="checkbox" onChange={() => setPass(!pass)} />
          <label htmlFor="checkbox" className="text-white text-[15px] font-medium">
            Show Password
          </label>
        </div>

        <span className="text-[white] text-[20px]">OR</span>

        <a href="#" className="text-cyan-500 text-[15px]">Forgot Password?</a>
      </div>

      <button className="bg-[#087292] text-white p-[20px] text-[20px] rounded-[8px] opacity-100 cursor-pointer hover:opacity-75">
        Sign up
      </button>
    </div>
  );
};

export default LoginForm;
